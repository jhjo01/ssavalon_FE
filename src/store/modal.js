import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  isOpen: false,
  title: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, title } = action.payload;
      state.type = type;
      state.isOpen = true;
      state.title = title;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectorModal = (state) => state.modal;
export default modalSlice.reducer;
