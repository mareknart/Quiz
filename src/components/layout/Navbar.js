import { Fragment } from "react";
import classes from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <Fragment>
      <nav className={classes.nav}>Quiz geograficzny</nav>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Navbar;
