import classes from "./Answer.module.css";

const Answer = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Answer;
