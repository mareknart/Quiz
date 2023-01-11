import Card from "../../UI/Card";
import classes from "./LangTile.module.css";

const LangTile = (props) => {
  return (
    <Card clName={classes.item}>
        <img
          className={classes.flag}
          src={props.country.flag}
          alt={props.country.name}
        />
    </Card>
  );
};

export default LangTile;
