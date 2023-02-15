import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  roomId: "",
  connectedUsers: '[{ "nickname": cici, "job":"", "isLeader": cici, "isJury: cici}]',
  round: "",
  voteRound: "",
  prevRound: '[{"round": 0, "win":cici}]',
  agreeDisagree: '[{"nickname":cici, "agree": cici}]',
  guilty: "2",
  notGuilty: "1",
  script: "asd",
};

export const roomAndActiveSlice = createSlice({
  name: "roomAndActive",
  initialState,
  reducers: {
    updateGameState: (state, action) => {
      const {
        status,
        roomId,
        playerList,
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
      state.playerList = playerList;
      state.round = round;
      state.voteRound = voteRound;
      state.prevRound = prevRound;
      state.agreeDisagree = agreeDisagree;
      state.guilty = guilty;
      state.notGuilty = notGuilty;
      state.script = script;
    },
    clearGameState: (state, action) => {
      const {
        status,
        roomId,
        playerList,
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
      state.playerList = playerList;
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

export const { updateGameState, clearGameState } = roomAndActiveSlice.actions;
export const selectorRoomAndActive = (state) => state.roomAndActive;
export default roomAndActiveSlice.reducer;
