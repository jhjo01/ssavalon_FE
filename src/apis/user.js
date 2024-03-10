import axios from "axios";
import { postConfig_8000, getConfig_8000 } from "./config";

export const signup = async (data) => {
  const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  return res;
};

export const login = async (code) => {
  const response = await axios.get(`:9000/oauth/kakao?code=${code}`);
  return response;
};

export const getMypage = async (nickname) => {
  const response = await axios(getConfig_8000(`/user-service/oauth/mypage/${nickname}`));
  return response.data;
};

export const getDuplication = async (nickname) => {
  const response = await axios(getConfig_8000(`/user-service/oauth/duplication/${nickname}`));
  return response;
};
