import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    language: "pl-PL",
    player: { name: null, difficulty: null },
    game:{difficulty: null, continents: [], countries:[]},
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
      state.game.difficulty = action.payload.difficulty;
    },
    setContinent(state,action){
      state.game.continents.push(action.payload.continent);
    }
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
