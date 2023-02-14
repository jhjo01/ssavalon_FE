import axios from "axios";
import { postConfig_8000 } from "./config";

export const createRoom = async (data) => {
  const res = await axios(postConfig_8000("/standby-service/room/create", data));
  return res;
};

export const joinRoom = async (data) => {
  const res = await axios(postConfig_8000("/standby-service/room/enter", data));
  return res;
};
