import { useEffect, useState, useTransition } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./Game.module.css";
import QuestionCard from "../components/game/question/QuestionCard";
import QuestionSet from "../components/game/question/QuestionSet";
import { useTranslation } from "react-i18next";

const Game = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const game = useSelector((state) => state.game);
  const questionsList = game.questions;
  const correctAnswer = game.questions[questionNumber].correctAnswer;
  const questionType = questionsList[questionNumber].type;
  const history = useHistory();
  const difficulty = game.game.difficulty;
  const countries = game.game.countries;
  const { t } = useTranslation(["countries", "translation"]);
  let actualQuestions = [];
  let question;
  useEffect(() => {
    if (!difficulty) {
      history.push("/main");
    }
  }, [history, difficulty]);

  questionsList[questionNumber].answers.map((item) => {
    if (questionType === "country") {
      actualQuestions.push(item.country);
      let capital = `${t(correctAnswer.capital)}`;
      question = `${t("country_question", {
        ns: "translation",
        city: capital,
      })}`;
    }
    if (questionType === "capital") {
      actualQuestions.push(item.capital);
      let country = `${t(correctAnswer.country)}`;
      question = `${t("capital_question", {
        ns: "translation",
        country: country,
      })}`;
    }
  });

  const onAnswerHandler = () => {
    if (questionNumber < questionsList.length - 1) {
      setQuestionNumber((prevNo) => prevNo + 1);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.game}>
        <QuestionSet
          number={countries.length}
          questionNo={questionNumber + 1}
        />
        <div className={classes.item}>
          <QuestionCard
            questionNo={questionNumber + 1}
            onClick={onAnswerHandler}
            actualQuestionsList={actualQuestions}
            question={question}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
