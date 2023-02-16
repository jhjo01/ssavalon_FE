import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  connectedUsers: [{ nickname: "", rotate: "", isHost: "", isReady: "" }],
};

export const roomAndStandBySlice = createSlice({
  name: "roomAndStandBy",
  initialState,
  reducers: {
    updateRoom(state, action) {
      state.connectedUsers = action.payload;
    },
    clearRoom(state, action) {
      state.connectedUsers = action.payload;
    },
  },
});

export const { updateRoom, clearRoom } = roomAndStandBySlice.actions;
export const selectorRoomAndStandBy = (state) => state.roomAndStandBy;
export default roomAndStandBySlice.reducer;
