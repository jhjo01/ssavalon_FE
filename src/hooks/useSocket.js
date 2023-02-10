import { API_END_POINT, SOCKET_SUB_END_POINT, SOCKET_PUB_END_POINT } from "../constants/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { updateRoom } from "../store/roomAndPlayer";

export const useSocket = (client, roomId, sender) => {
  const dispatch = useDispatch();
  const connect = () => {
    client.current = new StompJs.Client({
      webSocketFactory: () => new SockJS(`${API_END_POINT}/ws-stomp`),
      onConnect: () => {
        subscribe(roomId, sender);
      },
    });

    client.current.activate();
  };

  const subscribe = (roomId, sender) => {
    client.current.subscribe(`${SOCKET_SUB_END_POINT}/${roomId}`, (message) => {
      dispatch(updateRoom(message.body));
    });

    client.current.publish({
      destination: SOCKET_PUB_END_POINT,
      headers: {},
      body: JSON.stringify({ type: "ENTER", roomId: roomId, sender: sender }),
    });
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  // const ready = (client, roomId, sender) => {
  //   console.log(client);
  //   client.current.publish({
  //     destination: SOCKET_PUB_END_POINT,
  //     headers: {},
  //     body: JSON.stringify({ type: "READY", roomId: roomId, sender: sender }),
  //   });
  // };
  

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);


};

export const ready = (client, roomId, sender) => {
  console.log(client);
  client.current.publish({
    destination: SOCKET_PUB_END_POINT,
    headers: {},
    body: JSON.stringify({ type: "READY", roomId: roomId, sender: sender }),
  });
};
