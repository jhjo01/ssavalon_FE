import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  isOpen: false,
  title: "",
  roomId: "",
  errMessage: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, title, roomId, errMessage } = action.payload;
      state.type = type;
      state.isOpen = true;
      state.title = title;
      state.roomId = roomId;
      state.errMessage = errMessage;
    },
    closeModal: (state) => {
      state.title = "";
      state.errMessage = "";
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectorModal = (state) => state.modal;
export default modalSlice.reducer;
