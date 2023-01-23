import { useEffect, useState } from "react";
import Player from "../components/game/menu/Player";
import classes from "./Main.module.css";
import Difficulty from "../components/game/menu/Difficulty";
import Continents from "../components/game/menu/Continents";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";

const Main = (props) => {
  const [playerNameEntered, setPlayerNameEntered] = useState(false);
  const [difficulty, setDifficulty] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameActions.setNewGame({}));
  }, [dispatch]);

  const onNameEnterHandler = () => {
    setPlayerNameEntered(true);
  };
  const onDifficultySetHandler = () => {
    setDifficulty(true);
  };
  return (
    <main className={classes.main}>
      <div className={classes.item}>
        {!playerNameEntered && <Player enteredName={onNameEnterHandler} />}
        {playerNameEntered && !difficulty && (
          <Difficulty setDifficulty={onDifficultySetHandler} />
        )}
        {playerNameEntered && difficulty && <Continents />}
      </div>
    </main>
  );
};

export default Main;
