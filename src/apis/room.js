import axios from "axios";
import { postConfig } from "./config";

export const createRoom = async (data) => {
  const res = await axios(postConfig("/game/room", data));
  return res;
};

export const joinRoom = async (data) => {
  const res = await axios(postConfig("/", data));
  return res;
}