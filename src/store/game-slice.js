import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    language: "pl",
    player: { name: "Marek", difficulty: 1 },
    game: { difficulty: null, continents: ["europe"], countries: [] },
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
    setContinent(state, action) {
      state.game.continents.push(action.payload.continent);
    },
    setQuestions(state, action) {
      const questionNumbers = action.payload.number;
      const countries = Object.keys(action.payload.countries);
      if (state.game.countries.length < 5) {
        for (let i = 0; i < questionNumbers; i++) {
          let x = Math.floor(Math.random() * countries.length);
          state.game.countries.push(countries[x]);
        }
      }
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
