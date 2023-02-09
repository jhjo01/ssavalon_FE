import { configureStore } from "@reduxjs/toolkit";
import { roomSlice } from "./room";
import { modalSlice } from "./modal";
import { roundLogSlice } from "./roundLog";

export default configureStore({
  reducer: {
    room: roomSlice.reducer,
    modal: modalSlice.reducer,
    roundLog: roundLogSlice.reducer,
  },
});
