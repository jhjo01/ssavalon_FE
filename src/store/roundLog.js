import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { API_END_POINT } from "../constants/index";

import gameLog from "../dummy/gameLog";
import gameLog2 from "../dummy/gameLog2";

const getRoundLog = createAsyncThunk("roundLogSlice/getRoundLog", async (props) => {
  // test api
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  if (response != null) {
  }
  if (props === 1) {
    return gameLog;
  } else if (props === 2) {
    return gameLog2;
  }

  // const response = await axios.get(`${API_END_POINT}/game/rooms`);
  // return response.data;
});

export const roundLogSlice = createSlice({
  name: "getRoundLog",
  initialState: {
    result: null,
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

export { getRoundLog };
