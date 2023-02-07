import classes from "./QuestionNumber.module.css";
import Card from "../../UI/Card";

const QuestionNumber = (props) => {

    let style = `${classes.tile}`

    if(props.isActive){
      style = `${classes.tile} ${classes.active}`
    }

  return (
    <div className={style}>
      <Card>
        <div className={classes.content}>{props.children}</div>
      </Card>
    </div>
  );
};

export default QuestionNumber;
