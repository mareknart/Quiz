import { useState } from "react";

import Player from "../components/game/menu/Player";
import classes from "./Main.module.css";
import { Countries } from "../data/CountryData";

import Language from "../components/game/menu/Language";
import Difficulty from "../components/game/menu/Difficulty";

const Main = (props) => {
  const [playerNameEntered, setPlayerNameEntered] = useState(false);
  const [language, setLanguage] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

  const onNameEnterHandler = () => {
    setPlayerNameEntered(true);
  };

  const onSetLanguageHandler = () => {
    setLanguage(true);
  };

  const [...Europe] = Countries[0].Europe;
  const poland = Europe.find((item) => {
    return item.country === "Polska";
  });
  const british = Europe.find((item) => {
    return item.country === "Wielka Brytania";
  });
  
  return (
    <main className={classes.main}>
      {!language && (
        <Language
          poland={poland}
          british={british}
          onSetLanguage={onSetLanguageHandler}
        />
      )}
      {language && !playerNameEntered && (
        <Player enteredName={onNameEnterHandler} />
      )}
      {playerNameEntered && <Difficulty/>}
    </main>
  );
};

export default Main;
