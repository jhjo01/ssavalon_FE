import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  connectedUsers: [{ rotate: "", id: "" }],
};

export const roomAndPlayerSlice = createSlice({
  name: "roomAndPlayer",
  initialState,
  reducers: {
    updateRoom(state, action) {
      // const { roo } = action.payload;

      state.connectedUsers = action.payload;
    },
  },
});

export const { updateRoom } = roomAndPlayerSlice.actions;
export const selectorModal = (state) => state.roomAndPlayer;
export default roomAndPlayerSlice.reducer;
