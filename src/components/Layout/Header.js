import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={classes.header}>
          <Link to="/">
          <img
            src={require("../../assets/images/blank.png")}
            alt="Poppin Soda Shop Logo"
          ></img>
        </Link>
        <div className={classes.navBox}>
          <Navigation/>
        </div>
    </header>
  );
};

export default Header;
