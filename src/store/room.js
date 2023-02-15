import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BUSINESS } from "../constants/index";
import { axiosGetRooms } from "../apis/room";

const getRoom = createAsyncThunk("roomSlice/getRoom", async () => {
  // const response = await axios.get(`${API_END_POINT}/game/rooms`);
  // const response = await axios.get(`${API_BUSINESS}/standby-service/room/list`);

  const response = await axiosGetRooms();

  // console.log(response.data);
  return response.data;
});

export const roomSlice = createSlice({
  name: "getRoom",
  initialState: {
    rooms: [],
    status: "Loading",
  },

  extraReducers: (builder) => {
    builder.addCase(getRoom.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(getRoom.fulfilled, (state, action) => {
      state.rooms = action.payload;
      state.status = "complete";
    });
    builder.addCase(getRoom.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export { getRoom };
