import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_END_POINT } from "../constants/index";

import gameLog from "../dummy/gameLog";

const getRoundLog = createAsyncThunk("roomid/getLog", async (props) => {
  // test api
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  // const response = await axios.get(`${API_END_POINT}/game/rooms`);
  return gameLog;
  // return response.data;
});

export const roundLogSlice = createSlice({
  name: "getRoundLog",
  initialState: {
    result: [],
    status: "Loading",
  },

  extraReducers: (builder) => {
    builder.addCase(getRoundLog.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(getRoundLog.fulfilled, (state, action) => {
      state.result = action.payload;
      state.status = "complete";
    });
    builder.addCase(getRoundLog.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default roundLogSlice;
export { getRoundLog };
