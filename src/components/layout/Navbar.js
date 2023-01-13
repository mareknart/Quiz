import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const player = useSelector((state) => state.player);
  return (
    <Fragment>
      <nav className={classes.nav}>
        <div className={classes.title}>Quiz geograficzny</div>
        {player.player.name && (
          <div>
            <div className={classes.player}>Witaj {player.player.name}</div>
          </div>
        )}
        {player.player.language &&
        <div className={classes.flag}><img className={classes.flagpic} src={player.player.flag} alt='flag'/></div>}
      </nav>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Navbar;
