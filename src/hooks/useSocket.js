import { API_END_POINT, SOCKET_SUB_END_POINT, SOCKET_PUB_END_POINT } from "../constants/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { updateRoom } from "../store/roomAndStandBy";
import { updateChat } from "../store/chat";

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
      // spring에서 넘어오는 데이터 parse
      const parse = JSON.parse(message.body);

      if (parse.type === "READY") {
        console.log(message.body);
        return;
      }

      // 분기문 처리
      if (parse.type === "TALK") {
        const object = { sender: parse.sender, message: parse.message };
        dispatch(updateChat(object));
      } else {
        dispatch(updateRoom(message.body));
      }
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

  useEffect(() => {
    connect();
    console.log("connet");
    return () => disconnect();
  }, []);
};

export const ready = (type, client, roomId, sender) => {
  client.current.publish({
    destination: SOCKET_PUB_END_POINT,
    headers: {},
    body: JSON.stringify({ type: type, roomId: roomId, sender: sender }),
  });
};

export const chat = (type, client, roomId, sender, message) => {
  client.current.publish({
    destination: SOCKET_PUB_END_POINT,
    headers: {},
    body: JSON.stringify({
      type: type,
      roomId: roomId,
      sender: sender,
      message: message,
    }),
  });
};
