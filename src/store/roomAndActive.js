import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  roomId: "",
  connectedUsers:
    '[{"userId": null, "userNickName": null, "job":"", "isLeader": null, "isJury: null}]',
  round: "",
  voteRound: "",
  prevRound: '[{"round": 0, "win":null}]',
  agreeDisagree: '[{"userId": null, "userNickName":null, "agree": null}]',
  guilty: "",
  notGuilty: "",
  script: "",
};

export const roomAndActiveSlice = createSlice({
  name: "roomAndActive",
  initialState,
  reducers: {
    updateGameState: (state, action) => {
      const {
        status,
        roomId,
        connectedUsers,
        round,
        voteRound,
        prevRound,
        agreeDisagree,
        guilty,
        notGuilty,
        script,
      } = action.payload;
      state.status = status;
      state.roomId = roomId;
      state.connectedUsers = connectedUsers;
      state.round = round;
      state.voteRound = voteRound;
      state.prevRound = prevRound;
      state.agreeDisagree = agreeDisagree;
      state.guilty = guilty;
      state.notGuilty = notGuilty;
      state.script = script;
    },
  },
});

export const { updateGameState } = roomAndActiveSlice.actions;
export const selectorRoomAndActive = (state) => state.roomAndActive;
export default roomAndActiveSlice.reducer;
