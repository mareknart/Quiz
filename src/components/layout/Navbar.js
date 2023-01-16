import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const player = useSelector((state) => state.player);
  const {t}=useTranslation();
  return (
    <Fragment>
      <nav className={classes.nav}>
        <div className={classes.title}>{t("quiz")}</div>
        {player.player.name && (
          <div className={classes.player}>Witaj {player.player.name} {player.player.difficulty}</div>
        )}
        {player.player.language && (
          <div className={classes.flag}>
            <img
              className={classes.flagpic}
              src={player.player.flag}
              alt="flag"
            />
          </div>
        )}
      </nav>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Navbar;
