import { useState } from "react";
import Player from "../components/game/menu/Player";
import classes from "./Main.module.css";
import Difficulty from "../components/game/menu/Difficulty";

const Main = (props) => {
  const [playerNameEntered, setPlayerNameEntered] = useState(false);

  const onNameEnterHandler = () => {
    setPlayerNameEntered(true);
  };

  return (
    <main className={classes.main}>
      <div className={classes.item}>
        {!playerNameEntered && <Player enteredName={onNameEnterHandler} />}
        {playerNameEntered && <Difficulty />}
      </div>
    </main>
  );
};

export default Main;
