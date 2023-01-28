import Card from "../../UI/Card";
import Answer from "./Answer";
import classes from "./QuestionCard.module.css";
import { useTranslation } from "react-i18next";

const QestionCard = (props) => {
  const { t } = useTranslation(["countries", "translation"]);
  const question = props.question;
  const onAnswerHandler = () => {
    props.onClick();
  };

  return (
    <div className={classes.main}>
      <Card>
        <div className={classes.content}>
          <div className={classes.title}>
            {t("questionNo", { ns: "translation", count: props.questionNo })}
          </div>
          <div className={classes.question}>{question}</div>
          <div className={classes.action}>
            {props.actualQuestionsList.map((item) => {
              return (
                <div className={classes.answer} key={item}>
                  <Answer onClick={onAnswerHandler} id={item}>
                    {t(item)}
                  </Answer>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QestionCard;
