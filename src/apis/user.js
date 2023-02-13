import axios from "axios";
import { postConfig_8000 } from "./config";

export const signup = async (data) => {
  const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  // const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  // return res;
};

export const login = async (code) => {
  // const response = await axios.get(`/api/oauth/kakao?code=${code}`);
  const response = await axios.get(`http://i8b305.p.ssafy.io:9000/oauth/kakao?code=${code}`);

  // const test = await axios.get(
  //   "/naver/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC"
  // );
  // console.log(test);

  // const response = {
  //   refreshToken: "ssss",
  //   nickname: "test",
  //   status: "valid",
  // };
  // const response = {
  //   kakaoId: "2652840277",
  //   status: "empty",
  // };

  return response;
};
