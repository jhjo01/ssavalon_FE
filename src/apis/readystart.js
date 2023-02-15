import { postConfig_8000 } from "./config";
import axios from "axios";

export const ready = async (roomId, nickname) => {
  const body = {
    roomId: roomId,
    nickname: nickname,
  };

  const res = await axios(postConfig_8000("/standby-service/room/ready", body));
  return res.data;
};

export const start = (roomId, nickname) => {
  const body = {
    roomId: roomId,
    nickname: nickname,
  };

  const res = axios(postConfig_8000("/standby-service/room/start", body));
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
