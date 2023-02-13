import axios from "axios";
// import { API_BUSINESS } from "../constants";
import { postConfig_8000, getConfig_8000 } from "./config";

export const signup = async (data) => {
  const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  return res;
};

export const login = async (code) => {
  const response = await axios.get(
    `http://i8b305.p.ssafy.io:9000/oauth/kakao?code=${code}`
  );
  return response;
};

export const getMypage = async (nickName) => {
  // const response = await axios.get(
  //   `${API_BUSINESS}/user-service/oauth/mypage/${nickName}`
  // );
  // console.log(response);
  const response = await axios(getConfig_8000(`/user-service/oauth/mypage/${nickName}`));
  return response.data;
};
