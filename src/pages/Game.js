import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./Game.module.css";
import QuestionCard from "../components/game/question/QuestionCard";
import QuestionSet from "../components/game/question/QuestionSet";
const Game = (props) => {
  const game = useSelector((state) => state.game);

  const history = useHistory();
  const continents = game.game.continents.length;
  const countries = game.game.countries;
  useEffect(() => {
    if (continents == 0) {
      history.push("/main");
    }
  }, [history, continents]);

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
