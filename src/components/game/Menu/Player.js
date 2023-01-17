import { useRef } from "react";
import { useDispatch } from "react-redux";
import Card from "../../UI/Card";
import { gameActions } from "../../../store/game-slice";
import classes from "./Player.module.css";
import { useTranslation } from "react-i18next";

const Player = (props) => {
  const playerNameRef = useRef();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const submitNameHandler = (event) => {
    event.preventDefault();
    const playerName = playerNameRef.current.value;
    dispatch(
      gameActions.addPlayerName({
        name: playerName,
      })
    );
    props.enteredName();
  };

  return (
    <div>
      {" "}
      <Card>
        <form onSubmit={submitNameHandler}>
          <div className={classes.control}>
            <label htmlFor="name">{t("your_name")}</label>
            <input type="text" id="name" ref={playerNameRef} />
          </div>
          <div className={classes.actions}>
            <button type="submit">OK</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Player;
