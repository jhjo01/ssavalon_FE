import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosGetRoundLog } from "../apis/roundLog";

import gameLog from "../dummy/gameLog";
import gameLog2 from "../dummy/gameLog2";

const getRoundLog = createAsyncThunk("roundLogSlice/getRoundLog", async (props) => {
  // const response = await axiosGetRoundLog(props);
  const response = props;

  if (response != null) {
  }
  if (props === 1) {
    return gameLog;
  } else if (props === 2) {
    return gameLog2;
  }

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
