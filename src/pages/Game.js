import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./Game.module.css";
import QuestionCard from "../components/game/question/QuestionCard";
const Game = (props) => {
  const game = useSelector((state) => state.game);
  const history = useHistory();
  const arrayLenght = game.game.continents.length;
  useEffect(() => {
    if (arrayLenght == 0) {
      history.push("/main");
    }
  }, []);

  return (
    <div className={classes.game}>
      <div className={classes.item}>
        <QuestionCard />
      </div>
    </div>
  );
};

export default Game;
