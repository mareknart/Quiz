import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    language: "pl",
    player: { name: null },
    game: { difficulty: null, continents: [], countries: [] },
    questions: [],
    //question {number, type, correct_answer, answers_arrray*3}
  },
  reducers: {
    setNewGame(state, action) {
      state.player = { name: null }
      state.game = { difficulty: null, continents: [], countries: [] };
      state.questions = [];
    },
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
      const countries = Object.keys(action.payload.countries);
      const level = state.game.difficulty;
      let numberOfQuestions;
      switch (level) {
        case "1":
          numberOfQuestions = 10;
          //logika do poziomu 1
          break;
        case "2":
          numberOfQuestions = 20;
          //logika do poziomu 2
          break;
        case "3":
          numberOfQuestions = 30;
          //logika do poziomu 3
          break;
        default:
          break;
      }

      if (state.game.countries.length < numberOfQuestions) {
        for (let i = 0; i < numberOfQuestions; i++) {
          let x = Math.floor(Math.random() * countries[0].length);
          state.game.countries.push(countries[x]);
        }
      }
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
