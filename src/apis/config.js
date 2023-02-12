import { API_END_POINT, API_BUSINESS } from "../constants";

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
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
};
