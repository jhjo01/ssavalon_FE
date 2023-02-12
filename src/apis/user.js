import axios from "axios";
import { postConfig_8000 } from "./config";

export const signup = async (data) => {
  console.log("data", data);
  // const formDataObject = Object.fromEntries(data.entries());
  // const formDataJsonString = JSON.stringify(formDataObject);

  // console.log(formDataJsonString);

  /* key 확인하기 */
  for (let key of data.keys()) {
    console.log(key);
  }

  /* value 확인하기 */
  for (let value of data.values()) {
    console.log(value);
  }

  // const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  const res = await axios(postConfig_8000("/user-service/oauth/regist", data));
  return res;
};
