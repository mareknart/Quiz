import QuestionNumber from "./QuestionNumber";
import classes from "./QuestionSet.module.css";

const QuestionSet = (props) => { 
  let isActive = false;
  const tiles = [];
  for (let i = 0; i < props.number; i++) {
    if (props.questionNo === i+1){
      isActive = true;
    } else{isActive = false}
    tiles.push(<div id={i+1} key={i}><QuestionNumber  isActive={isActive}>{i+1}</QuestionNumber></div>);
  }
  return (
    <div className={classes.qSet}>
      {tiles}
    </div>
  );
};

export default QuestionSet;
