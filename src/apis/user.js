import axios from "axios";
import { postConfig_8000 } from "./config";

export const signup = async (data) => {
  console.log("data", data);

  // const formDataObject = Object.fromEntries(data.entries());
  // const formDataJsonString = JSON.stringify(formDataObject);
  // console.log(formDataJsonString);

  // const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  return res;
};

export const login = async (code) => {
  // const response = await axios.get(`/api/oauth/kakao?code=${code}`);
  // const response = await axios.get(`http://3.36.97.158:9000/oauth/kakao?code=${code}`);

  // const response = {
  //   refreshToken:
  //     "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW1lMSIsImV4cCI6MTY3NjE3ODk3NH0.utrVh9ngpiO0mn60AzT0CRzaMqgMS07qXBOWl4bXtg5NokHNd54ibtaxJsGJy0sX0FNLOsd3pw77x-OAlAYbMA",
  //   nickname: "name1",
  // };
  const response = {
    kakaoId: "2652840277",
    status: "empty",
  };

  console.log(response);

  return response;
};
