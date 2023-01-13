import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    player: { name: null, language: null, flag: null, difficulty: null },
    score: { 0: 0, 1: 0, 2: 0 },
  },
  reducers: {
    addPlayerName(state, action) {
      state.player.name = action.payload.name;
    },
    setLanguage(state, action) {
      state.player.language = action.payload.language;
      state.player.flag = action.payload.flag;
    },
    setDifficulty(state, action) {
      state.player.difficulty = action.payload.difficulty;
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice;
