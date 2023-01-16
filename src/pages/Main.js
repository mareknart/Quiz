import { useState } from "react";

import Player from "../components/game/menu/Player";
import classes from "./Main.module.css";
import { Countries } from "../data/CountryDataPl";

import Language from "../components/game/menu/Language";
import Difficulty from "../components/game/menu/Difficulty";

const Main = (props) => {
  const [playerNameEntered, setPlayerNameEntered] = useState(false);
  const [language, setLanguage] = useState(false);

  const onNameEnterHandler = () => {
    setPlayerNameEntered(true);
  };

  const onSetLanguageHandler = () => {
    setLanguage(true);
  };

  const [...Europe] = Countries[4].c5;
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
