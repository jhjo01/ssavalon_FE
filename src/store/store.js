import { configureStore } from "@reduxjs/toolkit";
import { roomSlice } from "./room";
import { modalSlice } from "./modal";
import { roomAndPlayerSlice } from "./roomAndPlayer";
import roundLogSlice from "./roundLog";

export default configureStore({
  reducer: {
    room: roomSlice.reducer,
    roomAndPlayer: roomAndPlayerSlice.reducer,
    modal: modalSlice.reducer,
    roundLog: roundLogSlice.reducer,
  },
});
