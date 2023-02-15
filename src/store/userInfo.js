import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  nickname: "",
  refreshToken: "",
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { isLogin, nickname, refreshToken } = action.payload;
      state.isLogin = isLogin;
      state.nickname = nickname;
      state.refreshToken = refreshToken;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export const selectorUserInfo = (state) => state.userInfo;
export default userSlice.reducer;
