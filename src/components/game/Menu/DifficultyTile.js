import { useState } from "react";
import Card from "../../UI/Card";
import classes from "./DifficultyTile.module.css";


const MenuTile = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  const infoDetails = classes.infoDetails;
  const mouseOverHandler = (event) => {
    setIsShowing(true);
  };
  const mouseLeaveHandler = (event) => {
    setIsShowing(false);
  };
  return (
    <Card>
      <div className={classes.tile} key={props.name}>
        <div className={classes.title}>Poziom trudności</div>
        <div className={classes.content}>
          {props.name}
          <div className={classes.info}>
            {!isShowing && (
              <div className={classes.infoIcon} onMouseOver={mouseOverHandler}>
                i
              </div>
            )}
          </div>
          {isShowing && (
            <div className={infoDetails} onMouseLeave={mouseLeaveHandler}>
              {props.description}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MenuTile;
