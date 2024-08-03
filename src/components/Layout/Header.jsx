import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import NavDesktop from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import logo from "../../assets/images/portfolioLogo.png"

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img
          src={logo}
          alt="Downs Portfolio Logo"
        ></img>
      </Link>
      <div className={classes.navBox}>
        <NavDesktop />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
