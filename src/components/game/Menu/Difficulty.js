import DifficultyTile from "./DifficultyTile";
import { LEVEL } from "../../../data/Level";
import classes from "./Difficulty.module.css";

const Difficulty = () => {
  return (
    <div className={classes.diff}>
      {LEVEL.map((item) => (
        <div key={item.name}>
          <DifficultyTile name={item.name} description={item.description} />
        </div>
      ))}
    </div>
  );
};

export default Difficulty;
