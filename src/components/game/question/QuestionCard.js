import Card from "../../UI/Card";
import Answer from "./Answer";
import classes from "./QuestionCard.module.css";

const QestionCard = () => {
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
