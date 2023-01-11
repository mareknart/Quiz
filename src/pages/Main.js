import { Fragment, useState } from "react";
import MenuTile from "../components/game/menu/MenuTile";
import Player from "../components/game/menu/Player";
import classes from "./Main.module.css";
import { Countries } from "../CountryData";
import { LEVEL } from "../level";
import Language from "../components/game/menu/Language";

const Main = (props) => {
  const [playerNameEntered, setPlayerNameEntered] = useState(false);
  const [language, setLanguage] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

  const onNameEnterHandler = () => {
    setPlayerNameEntered(true);
  };

  const [...Europe] = Countries[0].Europe;
  const poland = Europe.find((item) => {
    return item.country === "Polska";
  });
  const british = Europe.find((item) => {
    return item.country === "Wielka Brytania";
  });
  const diffLevels = LEVEL.map((item) => (
    <div className={classes.item} onClick={() => onClickHandler(item.name)}>
      <MenuTile name={item.name} description={item.description} />
    </div>
  ));
  const onClickHandler = (name) => {
    console.log(name);
  };
  return (
    <main className={classes.main}>
      {!language && (
        <Language poland={poland} british={british}/>
      )}
      {language && !playerNameEntered && (
        <Player enteredName={onNameEnterHandler} />
      )}
      {playerNameEntered && diffLevels}
    </main>
  );
};

export default Main;
