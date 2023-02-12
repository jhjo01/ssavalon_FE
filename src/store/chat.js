import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: [{ sender: "", message: "" }],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateChat(state, action) {
      state.chat = [...state.chat, action.payload];
    },
  },
});

export const { updateChat } = chatSlice.actions;
export const selectorChat = (state) => state.hat;
export default chatSlice.reducer;
