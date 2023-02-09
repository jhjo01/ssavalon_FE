import { useParams } from "react-router";
import { useState, useRef, useEffect } from "react";
import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import { API_END_POINT } from "../../../constants/index";
import { useDispatch } from "react-redux";
import { updateRoom } from "../../../store/roomAndPlayer";

const SocketTest = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const client = useRef({});
  const [sender, setSender] = useState("sf");
  const connect = () => {
    client.current = new StompJs.Client({
      webSocketFactory: () => new SockJS(`${API_END_POINT}/ws-stomp`),
      onConnect: () => {
        subscribe();
      },
    });
    client.current.activate();
  };

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
