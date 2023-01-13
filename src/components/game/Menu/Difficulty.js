import DifficultyTile from "./DifficultyTile";
import { LEVEL } from "../../../data/Level";
import classes from "./Difficulty.module.css";

const Difficulty = () => {
  const diffLevels = LEVEL.map((item) => (
    <div className={classes.item} key={item.name}>
      <DifficultyTile name={item.name} description={item.description} />
    </div>
  ));

  return LEVEL.map((item) => (
    <div className={classes.item} key={item.name}>
      <DifficultyTile name={item.name} description={item.description} />
    </div>
  ));
};

export default Difficulty;
