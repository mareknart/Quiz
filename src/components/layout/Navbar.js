import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { gameActions } from "../../store/game-slice";
import LangTile from "../game/menu/LangTile";
import classes from "./Navbar.module.css";

const pl = {
  flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/1024px-Flag_of_Poland_%28normative%29.svg.png"
};
const en = {
  flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1024px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
}

const Navbar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const game = useSelector((state) => state.game);
  const [language, setLanguage]=useState(en);
  const { t, i18n } = useTranslation();
  const barStyle = `${classes.nav}`;
  
  const onFlagClickHandler = (event) => {
    event.preventDefault();
    if (game.language === 'pl'){
      i18n.changeLanguage('en');
      setLanguage(pl);
      dispatch(gameActions.setLanguage({language: "en"}))
    }
    else{
      i18n.changeLanguage('pl');
      setLanguage(en);
      dispatch(gameActions.setLanguage({language: "pl"}))
    }
  };

  const newGameHandler =()=>{
    dispatch(gameActions.setNewGame());
    history.push("/main");
  }
  return (
    <Fragment>
      <nav className={barStyle}>
        <div className={classes.title} onClick={newGameHandler}>{t("quiz")}</div>
        {game.player.name && (
          <div className={classes.player}>
            {t('hello')} {game.player.name}
          </div>
        )}
        <div className={classes.flag} onClick={onFlagClickHandler}>
          <LangTile country={language} />
        </div>
      </nav>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Navbar;
