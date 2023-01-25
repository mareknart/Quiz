import { createSlice } from "@reduxjs/toolkit";

const QUESTIONTYPE = ["country", "capital", "flag", "shape"];

const gameSlice = createSlice({
  name: "game",
  initialState: {
    language: "pl",
    player: { name: null },
    game: { difficulty: null, continents: [], countries: [] },
    questions: [],
    //question in array questions {type, correct_answer, answers_arrray*3}
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
      const level = state.game.difficulty;
      let numberOfQuestions;
      let questionTypeIndex;
      const randomType = () => Math.floor(Math.random() * questionTypeIndex);
      const randomCountryNo = () =>
        Math.floor(Math.random() * tempCountries.length);

      const randomCountry = (indexNumber, array) =>
        array.find(
          (item) => item.country === tempCountries[indexNumber].country
        );

      for (const key in countriesList) {
        tempCountries.push(countriesList[key]);
      }
      switch (level) {
        case "1":
          //logic for level 1
          numberOfQuestions = 10;
          questionTypeIndex = 2;
          break;
        case "2":
          numberOfQuestions = 20;
          //logic for level 2
          questionTypeIndex = 3;
          break;
        case "3":
          numberOfQuestions = 30;
          //logic for level 3
          questionTypeIndex = 4;
          break;
        default:
          break;
      }
      
      if (state.game.countries.length < numberOfQuestions) {
        while (state.game.countries.length < numberOfQuestions) {
          let x = randomCountryNo();
          let answers = [];
          let questionType = QUESTIONTYPE[randomType()];
          let existCountry = randomCountry(x, state.game.countries);
          if (!existCountry) {
            state.game.countries.push(tempCountries[x]);
            answers.push(tempCountries[x]);
            while (answers.length < 4) {
              let rndNumber = randomCountryNo();

              let randomAnswer = randomCountry(rndNumber, answers);

              if (!randomAnswer) {
                answers.push(tempCountries[rndNumber]);
              }
            }
            state.questions.push({type: questionType, answers: answers})
          }
        }
      }
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
