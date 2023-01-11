import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    player: { name: null, language: null, difficulty: null },
    score: { 0: 0, 1: 0, 2: 0 },
  },
  reducers: {
    addPlayerName(state, action) {
      state.player.name = action.payload.name;
    },
    usedLanguage(state, action) {
      state.language = action.payload.languagel;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload.difficulty;
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice;
