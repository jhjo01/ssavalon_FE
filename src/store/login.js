import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { API_END_POINT } from "../constants/index";

const getUserInfo = createAsyncThunk("loginSlice/getUserInfo", async (props) => {
  const response = await axios.get(`http://3.36.97.158:9000/oauth/kakao?code=${props}`);

  if (response === null || response.data.kakaoId === "") {
    return { isLogin: false, refreshToken: "", nickName: "", kakaoId: "", status: "" };
  }

  if (response.data.status === "empty") {
    // redirect
    const data = {
      isLogin: false,
      refreshToken: "",
      nickName: "",
      kakaoId: response.data.kakaoId,
      userStatus: response.data.status,
    };
    return data;
  }

  const data = {
    isLogin: true,
    refreshToken: response.data.refreshToken,
    nickName: response.data.nickName,
    kakaoId: response.data.kakaoId,
    userStatus: response.data.status,
  };

  return data;
});

export const loginSlice = createSlice({
  name: "getUserInfo",
  initialState: {
    isLogin: false,
    kakaoId: "",
    userStatus: "",
    refreshToken: "",
    nickName: "",
    status: "Loading",
  },

  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      const { isLogin, refreshToken, nickName, kakaoId, userStatus } = action.payload;
      state.isLogin = isLogin;
      state.refreshToken = refreshToken;
      state.nickName = nickName;
      state.kakaoId = kakaoId;
      state.userStatus = userStatus;
      state.status = "complete";
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export { getUserInfo };
