import { postConfig_8000, postConfig_9002 } from "./config";
import axios from "axios";

export const ready = async (roomId, nickname) => {
  const body = {
    roomId: roomId,
    nickname: nickname,
  };
  const res = await axios(postConfig_8000("/standby-service/room/ready", body));
  return res.data;
};

export const start = (roomId, playerList) => {
  const body = {
    roomId: roomId,
    playerList: playerList,
  };
  const res = axios(postConfig_9002(`/api/game/start/${roomId}`, body));
  return res.data;
};

export const exit = (roomId, nickname) => {
  const body = {
    roomId: roomId,
    nickname: nickname,
  };

  const res = axios(postConfig_8000("/standby-service/room/kick", body));
  return res.data;
};
