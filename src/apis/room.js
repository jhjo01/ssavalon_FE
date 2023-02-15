import axios from "axios";
import { postConfig_8000, getConfig_8000 } from "./config";

export const createRoom = async (data) => {
  const res = await axios(postConfig_8000("/standby-service/room/create", data));
  return res;
};

export const joinRoom = async (data) => {
  const res = await axios(postConfig_8000("/standby-service/room/enter", data));
  return res;
};

export const axiosGetRooms = async () => {
  const res = await axios(getConfig_8000("/standby-service/room/list"));
  return res;
};
