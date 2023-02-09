import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./room";
import roundLogSlice from "./roundLog";

export default configureStore({
  reducer: {
    room: roomSlice.reducer,
    roundLog: roundLogSlice.reducer,
  },
});
