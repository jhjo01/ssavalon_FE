import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { roomSlice } from "./room";
import { modalSlice } from "./modal";
import { roomAndStandBySlice } from "./roomAndStandBy";
import { roundLogSlice } from "./roundLog";
import { roomAndActiveSlice } from "./roomAndActive";
import { chatSlice } from "./chat";
import { userSlice } from "./userInfo";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  room: roomSlice.reducer,
  roomAndStandBy: roomAndStandBySlice.reducer,
  roomAndActive: roomAndActiveSlice.reducer,
  modal: modalSlice.reducer,
  roundLog: roundLogSlice.reducer,
  chat: chatSlice.reducer,
  user: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["modal"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
