import { postConfig_8000 } from "./config";
import axios from "axios";

export const submitJury = (roomId, nickname, selectPeople) => {
    const body = {
        roomId: roomId,
        nickname: nickname,
        selectPeople: selectPeople,
    };

    const res = axios(postConfig_8000("/api/game/jury"), body);
    console.log(res);
    return res.data;
};