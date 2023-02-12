import axios from "axios";
import { postConfig_3030 } from "./config";

export const createRoom = async (data) => {
  const res = await axios(postConfig_3030("/game/room", data));
  return res;
};

export const joinRoom = async (data) => {
  const res = await axios(postConfig("/", data));
  return res;
}