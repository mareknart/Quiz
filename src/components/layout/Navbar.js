import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const player = useSelector((state) => state.player);
  return (
    <Fragment>
      <nav className={classes.nav}>
        <div className={classes.title}>Quiz geograficzny</div>
        {player && (
          <div>
            <div className={classes.player}>Witaj {player.player.name}</div>
          </div>
        )}
      </nav>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Navbar;
