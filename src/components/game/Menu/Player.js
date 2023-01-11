import { useRef } from "react";
import { useDispatch } from "react-redux";
import Card from "../../UI/Card";
import { playerActions } from "../../../store/player-slice";
import classes from "./Player.module.css";


const Player = (props) => {
  const playerNameRef = useRef();
  const dispatch = useDispatch();


  const submitNameHandler = (event) => {
    event.preventDefault();
    const playerName = playerNameRef.current.value;
    dispatch(
      playerActions.addPlayerName({
        name: playerName,
      })
    );
    props.enteredName();
  };

  return (
    <Card>
      <form onSubmit={submitNameHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Twoje imię</label>
          <input type="text" id="name" ref={playerNameRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">OK</button>
        </div>
      </form>
    </Card>
  );
};

export default Player;
