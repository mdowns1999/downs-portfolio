import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import NavDesktop from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import logo from "../../assets/images/portfolioLogo.png";
import Image from "../UI/Image";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <Image src={logo} alt="Downs Portfolio Logo" />
      </Link>
      <div className={classes.navBox}>
        <NavDesktop />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
