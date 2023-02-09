import { useParams } from "react-router";
import { useState, useRef, useEffect } from "react";
import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import { API_END_POINT } from "./../../../constants/index";
import { useSelector, useDispatch } from "react-redux";
import roomAndPlayer, { updateRoom } from "../../../store/roomAndPlayer";

const SocketTest = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const connectedUsers = useSelector((state) => {
    return state.roomAndPlayer.connectedUsers;
  });

  const client = useRef({});
  const [sender, setSender] = useState("함상준");
  const connect = () => {
    client.current = new StompJs.Client({
      webSocketFactory: () => new SockJS(`${API_END_POINT}/ws-stomp`),
      onConnect: () => {
        subscribe();
      },
    });
    client.current.activate();
  };

  //   const publish = () => {
  //     if (!client.current.connected) return;

  //     client.current.publish({
  //       destination: "/pub/message/user",
  //       headers: {},
  //       body: JSON.stringify({
  //         type: "ENTER",
  //         id: id,
  //         sender: sender,
  //       }),
  //     });
  //     setSender("");
  //   };

  const subscribe = () => {
    client.current.subscribe(`/sub/message/user/${id}`, (message) => {
      dispatch(updateRoom(message.body));
    });
    client.current.publish({
      destination: "/pub/message/user",
      headers: {},
      body: JSON.stringify({ type: "ENTER", roomId: id, sender: sender }),
    });
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  return <div></div>;
};

export default SocketTest;
