import {
  API_SOCKET,
  SOCKET_SUB_END_POINT,
  SOCKET_PUB_END_POINT,
  CHAT_PUB_END_POINT,
  CHAT_SUB_END_POINT,
} from "../constants/index";
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
      webSocketFactory: () => new SockJS(`${API_SOCKET}/ws-stomp`),
      onConnect: () => {
        subscribe(roomId, sender);
        subscribe2(roomId, sender);
      },
    });

    client.current.activate();
  };

  

  const subscribe = (roomId, sender) => {
    client.current.subscribe(`${SOCKET_SUB_END_POINT}/${roomId}`, (message) => {
      // spring에서 넘어오는 데이터 parse
      const parse = JSON.parse(message.body);

      // 분기문 처리
      if (parse.type === "TALK") {
        const object = { sender: parse.sender, message: parse.message };
        dispatch(updateChat(object));
      } else {
        dispatch(updateRoom(parse));
      }
    });

    client.current.publish({
      destination: SOCKET_PUB_END_POINT,
      headers: {},
      body: JSON.stringify({ type: "ENTER", roomId: roomId, sender: sender }),
    });

  };

  const subscribe2 = (client, roomId) => {
    client.current.subscribe(`${CHAT_SUB_END_POINT}/${roomId}`, (message) => {
      console.log(message);
    });
  }
  
  useEffect(() => {
    connect();
    return () => disconnect(client);
  }, []);
};

export const disconnect = (client) => {
  client.current.deactivate();
};

export const chat = (client, roomId, nickname, message) => {
  console.log(client);
  console.log(roomId);
  console.log(nickname);
  console.log(message);
  client.current.publish({
    destination: CHAT_PUB_END_POINT,
    headers: {},
    body: JSON.stringify({
      roomId: roomId,
      nickname: nickname,
      message: message,
    }),
  });
};
