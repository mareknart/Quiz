import { CONTINENTS } from "../../../data/Continents";
import classes from "./Continents.module.css";
import ContinentTile from "./ContinentTile";

const Continents = () => {
  return (
    <div className={classes.item}>
      {CONTINENTS.map((item) => (
        <div className={classes.tile}>
          <ContinentTile shape={item.shape} name={item.name} key={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Continents;
