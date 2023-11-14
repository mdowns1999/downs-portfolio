import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
    <span className={classes.ham}></span>
      <ul className={classes.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;