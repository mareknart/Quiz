import QuestionNumber from "./QuestionNumber";
import classes from "./QuestionSet.module.css";

const QuestionSet = (props) => {
  
  const tiles = [];
  for (let i = 0; i < props.number; i++) {
    tiles.push(<QuestionNumber key={i}>{i+1}</QuestionNumber>);
  }
  return (
    <div className={classes.qSet}>
      {tiles}
    </div>
  );
};

export default QuestionSet;
