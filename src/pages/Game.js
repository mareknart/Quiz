import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./Game.module.css";
import QuestionCard from "../components/game/question/QuestionCard";
import QuestionSet from "../components/game/question/QuestionSet";
const Game = (props) => {
  const game = useSelector((state) => state.game);

  const history = useHistory();
  const difficulty = game.game.difficulty;
  const countries = game.game.countries;
  useEffect(() => {
    if (!difficulty) {
      history.push("/main");
    }
  }, [history, difficulty]);

  return (
    
    <div className={classes.main}>
      <div className={classes.game}>
        <QuestionSet number={countries.length} />
        <div className={classes.item}>
          <QuestionCard />
        </div>
      </div>
    </div>
  );
};

export default Game;
