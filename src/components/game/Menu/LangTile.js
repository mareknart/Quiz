import classes from "./LangTile.module.css";

const LangTile = (props) => {
  return (
    <div className={classes.item}>
        <img
          className={classes.flag}
          src={props.country.flag}
          alt={props.country.country}
        />
    </div>
  );
};

export default LangTile;
