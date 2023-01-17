import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    language: "pl",
    player: { name: null, difficulty: null },
    score: { 0: 0, 1: 0, 2: 0 },
  },
  reducers: {
    addPlayerName(state, action) {
      state.player.name = action.payload.name;
    },
    setLanguage(state, action) {
      state.language = action.payload.language;
    },
    setDifficulty(state, action) {
      state.player.difficulty = action.payload.difficulty;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
