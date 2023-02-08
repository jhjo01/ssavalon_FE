import { configureStore } from "@reduxjs/toolkit";
import { roomSlice } from "./room";
import { modalSlice } from "./modal";

export default configureStore({
  reducer: {
    room: roomSlice.reducer,
    modal: modalSlice.reducer,
  },
});
