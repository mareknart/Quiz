import classes from "./QuestionNumber.module.css";
import Card from "../../UI/Card";

const QuestionNumber = (props) => {
    const style = `${classes.tile}`
  return (
    <div className={style} key={props.i}>
      <Card>
        <div className={classes.content}>{props.children}</div>
      </Card>
    </div>
  );
};

export default QuestionNumber;
