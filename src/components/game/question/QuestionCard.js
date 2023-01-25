import {useSelector } from "react-redux";
import Card from "../../UI/Card";
import Answer from "./Answer";
import classes from "./QuestionCard.module.css";
import { useTranslation } from "react-i18next";

const QestionCard = () => {
  const game = useSelector((state) => state.game);
  const { t } = useTranslation(["countries", "translation"]);

  let tempQuestion = game.questions[0];
  let question, answer1, answer2, answer3, answer4;
  if (game.questions.length > 0) {
    if (tempQuestion.type === "country") {
      let test = `${t(tempQuestion.answers[0].capital)}`;
      question = `${t('country_question',{ns:'translation', city: test})}`;
      answer1 = `${t(tempQuestion.answers[0].country)}`;
      answer2 = `${t(tempQuestion.answers[1].country)}`;
      answer3 = `${t(tempQuestion.answers[2].country)}`;
      answer4 = `${t(tempQuestion.answers[3].country)}`;
    }
    if (tempQuestion.type === "capital") {
      let test = `${t(tempQuestion.answers[0].country)}`;
      question = `${t('capital_Question',{ns:'translation', country: test})}`;
      answer1 = `${t(tempQuestion.answers[0].capital)}`;
      answer2 = `${t(tempQuestion.answers[1].capital)}`;
      answer3 = `${t(tempQuestion.answers[2].capital)}`;
      answer4 = `${t(tempQuestion.answers[3].capital)}`;
    }
  }
  return (
    <div className={classes.main}>
      <Card>
        <div className={classes.content}>
          <div className={classes.title}>Pytanie nr 1</div>
          <div className={classes.question}>{question}</div>
          <div className={classes.action}>
            <Answer>{answer1}</Answer>
            <Answer>{answer2}</Answer>
            <Answer>{answer3}</Answer>
            <Answer>{answer4}</Answer>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QestionCard;
