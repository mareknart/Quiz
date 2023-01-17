import { useDispatch } from "react-redux";
import { gameActions } from "../../../store/game-slice";
import LangTile from "./LangTile";
import classes from "./Language.module.css";

const Language = (props) => {
  const dispatch = useDispatch();

  const clickFlagHandler = (event) => {
    const language = event.target.alt;
    const flagPath = event.target.src;
    if (language === "Polska") {
      dispatch(gameActions.setLanguage({ language: "pl", flag: flagPath }));
    } else {
      dispatch(gameActions.setLanguage({ language: "en", flag: flagPath }));
    }
    props.onSetLanguage();
  };

  return (
    <div className={classes.item}>
      <div className={classes.content} onClick={clickFlagHandler}>
        <LangTile country={props.poland} />
      </div>
      <div className={classes.content} >
        <LangTile country={props.british} />
      </div>
    </div>
  );
};

export default Language;
