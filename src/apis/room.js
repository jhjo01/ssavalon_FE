import axios from "axios";
import { postConfig } from "./config";

export const createRoom = async (data) => {
  const res = await axios(postConfig("/game/room", data));
  return res;
};
