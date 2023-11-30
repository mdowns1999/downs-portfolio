import classes from "./NavDesktop.module.css";
import NavItems from "./NavItems";

const NavDesktop = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navList}>
        <NavItems />
      </ul>
    </nav>
  );
};

export default NavDesktop;
