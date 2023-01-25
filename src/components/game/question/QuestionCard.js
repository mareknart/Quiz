import { useDispatch, useSelector } from "react-redux";
import Card from "../../UI/Card";
import Answer from "./Answer";
import classes from "./QuestionCard.module.css";
import { COUNTRIES } from "../../../data/CountryData";
import { gameActions } from "../../../store/game-slice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const QestionCard = () => {
  const game = useSelector((state) => state.game);
  //const { t } = useTranslation("countries");
  const dispatch = useDispatch();
  const gameContinents = game.game.continents;
  
  useEffect(() => {
    let contArray = [];
    gameContinents.map((item) => {
      for (const key in COUNTRIES[item]) {
        contArray.push(COUNTRIES[item][key]);
      }
    });
    dispatch(
      //gameActions.setQuestions({ countries: COUNTRIES[gameContinents[0]] })
      gameActions.setQuestions({ countries: contArray })
    );
  }, [gameContinents, dispatch]);

  return (
    <div className={classes.main}>
      <Card>
        <div className={classes.content}>
          <div className={classes.title}>Pytanie nr 1</div>
          <div className={classes.question}>
            Stolicą jakiego kraju jest Andora?
          </div>
          <div className={classes.action}>
            <Answer>odp1</Answer>
            <Answer>odp2</Answer>
            <Answer>odp3</Answer>
            <Answer>odp4</Answer>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QestionCard;
