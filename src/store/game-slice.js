import { createSlice } from "@reduxjs/toolkit";

const questionType = ['country', 'capital', 'flag', 'shape'];

const gameSlice = createSlice({
  name: "game",
  initialState: {
    language: "pl",
    player: { name: null },
    game: { difficulty: null, continents: [], countries: []},
    questions: [],
    //question {number, type, correct_answer, answers_arrray*3}
  },
  reducers: {
    setNewGame(state, action) {
      state.player = { name: null };
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
      const countriesList = action.payload.countries;
      let tempCountries = [];
      for (const key in countriesList) {
        tempCountries.push(countriesList[key]);
      }

      const level = state.game.difficulty;
      let numberOfQuestions;
      switch (level) {
        case "1":
          numberOfQuestions = 10;
          //logika do poziomu 18787
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
        while (state.game.countries.length < numberOfQuestions) {
          let x = Math.floor(Math.random() * tempCountries.length);
          const existCountry = state.game.countries.find(
            (item) => item.country === tempCountries[x].country
          );
          if (!existCountry) {
            state.game.countries.push(tempCountries[x]);
            console.log(tempCountries[x]);
          }
        }
      }
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
