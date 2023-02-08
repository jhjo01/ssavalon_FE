import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./room";

export default configureStore({
  reducer: {
    room: roomSlice.reducer,
  },
});
