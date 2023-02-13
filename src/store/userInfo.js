import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  nickName: "",
  refreshToken: "",
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { isLogin, nickName, refreshToken } = action.payload;
      state.isLogin = isLogin;
      state.nickName = nickName;
      state.refreshToken = refreshToken;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export const selectorUserInfo = (state) => state.userInfo;
export default userSlice.reducer;
