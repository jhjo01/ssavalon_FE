import axios from "axios";
import { postConfig } from "./config";

export const sendMessage = async (data) => {
    await axios(postConfig("", data));
    return;
};
