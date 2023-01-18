import DifficultyTile from "./DifficultyTile";
import { LEVEL } from "../../../data/Level";
import classes from "./Difficulty.module.css";
import { useDispatch } from "react-redux";
import { gameActions } from "../../../store/game-slice";
import { useTranslation } from "react-i18next";

const Difficulty = (props) => {
  const dispatch = useDispatch();
  const {t}=useTranslation();
  const onSetLevelHandler = (event) => {
    dispatch(
      gameActions.setDifficulty({ difficulty: event.currentTarget.id })
    );
    props.setDifficulty();
  };
  return (
    <div className={classes.item}>
      <div className={classes.title}>{t('difficulty')}</div>
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
