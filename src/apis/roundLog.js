import axios from "axios";
import { getConfig_8000 } from "./config";

export const axiosGetRoundLog = async (props) => {
  const params = { round: props };
  const response = await axios(getConfig_8000(`/game/roundlog`, params));
  return response.data;
};
