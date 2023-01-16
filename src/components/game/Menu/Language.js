import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { playerActions } from "../../../store/player-slice";
import LangTile from "./LangTile";
import classes from "./Language.module.css";

const Language = (props) => {
  const dispatch = useDispatch();

  const clickFlagHandler = (event) => {
    const language = event.target.alt;
    const flagPath = event.target.src;
    if (language === "Polska") {
      dispatch(playerActions.setLanguage({ language: "PL", flag: flagPath }));
    } else {
      dispatch(playerActions.setLanguage({ language: "UK", flag: flagPath }));
    }
    props.onSetLanguage();
  };

  return (
    <Fragment>
      <div className={classes.item} onClick={clickFlagHandler}>
        <div className={classes.title}>Wybierz język.</div>

        <LangTile country={props.poland} />
      </div>
      <div className={classes.item} >
        <div className={classes.title} >Choose your language.</div>

        <LangTile country={props.british} />
      </div>
    </Fragment>
  );
};

export default Language;
