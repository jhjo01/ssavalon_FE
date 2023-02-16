import { postConfig_9002 } from "./config";
import axios from "axios";

export const submitJury = (roomId, selectPeople, status) => {
  if (status === "makeJury") {
    const body = {
      roomId: roomId,
      playerList: selectPeople,
    };
    const res = axios(postConfig_9002(`/api/game/make/${roomId}`, body));
    return res.data;
  }
  const body = {
    roomId: roomId,
    nickname: selectPeople[0].nickname,
  };
  const res = axios(postConfig_9002("/api/game/policechoice", body));
  return res.data;
};
