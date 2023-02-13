import axios from "axios";
import { postConfig_8000 } from "./config";

export const signup = async (data) => {
  const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  return res;
};

export const login = async (code) => {
  const response = await axios.get(`http://i8b305.p.ssafy.io:9000/oauth/kakao?code=${code}`);
  return response;
};
