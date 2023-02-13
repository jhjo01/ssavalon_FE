import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { API_END_POINT } from "../constants/index";

const getUserInfo = createAsyncThunk("loginSlice/getUserInfo", async (props) => {
  // const response = await axios.get(`/api/oauth/kakao?code=${props}`);
  const response = await axios.get(`http://3.36.97.158:9000/oauth/kakao?code=${props}`);

  console.log(response);
  if (response === null || response.data.kakaoId === "") {
    return { kakaoId: "", status: "" };
  }

  if (response.data.status === "empty") {
    const data = {
      kakaoId: response.data.kakaoId,
      userStatus: response.data.status,
    };
    return data;
  }

  const data = {
    kakaoId: response.data.kakaoId,
    userStatus: response.data.status,
  };

  return data;
});

export const loginSlice = createSlice({
  name: "getUserInfo",
  initialState: {
    kakaoId: "",
    userStatus: "",
    status: "Loading",
  },

  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      const { kakaoId, userStatus } = action.payload;
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
