import {
  API_SOCKET,
  API_END_POINT,
  SOCKET_SUB_END_POINT,
  SOCKET_PUB_END_POINT,
  CHAT_PUB_END_POINT,
  CHAT_SUB_END_POINT,
  GAME_SUB_END_POINT,
} from "../constants/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { updateRoom } from "../store/roomAndStandBy";
import { updateChat } from "../store/chat";
import { updateGameState } from "../store/roomAndActive";

export const useSocket = (client, gameClient, roomId, sender) => {
  const dispatch = useDispatch();

  const connect = () => {
    client.current = new StompJs.Client({
      webSocketFactory: () => new SockJS(`${API_SOCKET}/ws-stomp`),
      onConnect: () => {
        subscribe(roomId, sender);
      },
    });

    gameClient.current = new StompJs.Client({
      webSocketFactory: () => new SockJS(`${API_END_POINT}/ws-stomp`),
      onConnect: () => {
        gameSubscribe(roomId);
      },
    });

    client.current.activate();
    gameClient.current.activate();
  };

  const subscribe = (roomId, sender) => {
    client.current.subscribe(`${CHAT_SUB_END_POINT}/${roomId}`, (message) => {
      const parse = JSON.parse(message.body);
      const object = { sender: parse.nickname, message: parse.message };
      dispatch(updateChat(object));
    });

    client.current.subscribe(`${SOCKET_SUB_END_POINT}/${roomId}`, (message) => {
      // spring에서 넘어오는 데이터 parse
      const parse = JSON.parse(message.body);

      // 분기문 처리
      dispatch(updateRoom(parse));
    });

    client.current.publish({
      destination: SOCKET_PUB_END_POINT,
      headers: {},
      body: JSON.stringify({ type: "ENTER", roomId: roomId, sender: sender }),
    });
  };

  const gameSubscribe = (roomId) => {
    gameClient.current.subscribe(
      `${GAME_SUB_END_POINT}/${roomId}`,
      (message) => {
        const parse = JSON.parse(message.body);
        dispatch(updateGameState(parse));
      }
    );
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect(client);
      disconnect(gameClient);
    };
    // eslint-disable-next-line
  }, []);
};

export const disconnect = (client) => {
  client.current.deactivate();
};

export const chat = (client, roomId, nickname, message) => {
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
