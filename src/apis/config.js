import { API_END_POINT, API_BUSINESS } from "../constants";
import axios from "axios";
let token = localStorage.getItem("persist:root");
token = JSON.parse(token);
token = JSON.parse(token.user);
token = token.refreshToken;

axios.interceptors.request.use(
  (config) => {
    // 요청 보낼 때
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    // 요청했는데 에러나면
    return Promise.reject(error);
  }
);

export const postConfig_3030 = (url, data) => {
  return {
    method: "POST",
    url: API_END_POINT + url,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
};

export const postConfig_8000 = (url, data) => {
  return {
    method: "POST",
    url: API_BUSINESS + url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
};
