import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../../UI/Card";
import classes from "./DifficultyTile.module.css";

const MenuTile = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  const {t}=useTranslation();
  const infoDetails = classes.infoDetails;

  const mouseOverHandler = (event) => {
    setIsShowing(true);
  };
  const mouseLeaveHandler = (event) => {
    setIsShowing(false);
  };

  
  return (
    <div className={classes.tile}>
      <Card>
        <div className={classes.content}>
          {t(props.details.name)}
          <div className={classes.info}>
            {!isShowing && (
              <div className={classes.infoIcon} onMouseOver={mouseOverHandler}>
                i
              </div>
            )}
            {isShowing && (
              <div className={infoDetails} onMouseLeave={mouseLeaveHandler}>
                {t(props.details.description)}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MenuTile;
