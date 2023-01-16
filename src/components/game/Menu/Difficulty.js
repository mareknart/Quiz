import DifficultyTile from "./DifficultyTile";
import { LEVEL } from "../../../data/LevelPl";
import classes from "./Difficulty.module.css";
import { useDispatch } from "react-redux";
import { playerActions } from "../../../store/player-slice";

const Difficulty = () => {
  const dispatch = useDispatch();
  const onSetLevelHandler = (event) => {
    dispatch(
      playerActions.setDifficulty({ difficulty: event.currentTarget.id })
    );
  };
  return (
    <div>
      <div className={classes.title}>Poziom trudności</div>
      <div className={classes.diff}>
        {LEVEL.map((item) => (
          <div className={classes.content} key={item.name} id={item.level} onClick={onSetLevelHandler}>
            <DifficultyTile details={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
