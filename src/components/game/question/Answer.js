import classes from "./Answer.module.css";

const Answer = (props) => {
  const onClikHandler =()=>{
    props.onClick();
  }
  return (
    <div className={classes.main} onClick={onClikHandler} id={props.id}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Answer;
