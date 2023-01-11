import { Fragment } from "react";
import LangTile from "./LangTile";
import classes from "./Language.module.css";

const Language = (props) => {
  return (
    <Fragment>
      <div className={classes.item}>
        <LangTile country={props.poland} />
      </div>
      <div className={classes.item}>
        <LangTile country={props.british} />
      </div>
    </Fragment>
  );
};

export default Language;
