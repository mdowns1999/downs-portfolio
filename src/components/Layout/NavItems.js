import { NavLink } from "react-router-dom";
import classes from './NavItems.module.css';

const NavItems = () => {
    return <>
    <li className={classes.item}>
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
        <li className={classes.item}>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Projects
          </NavLink>
        </li>
    </>
}

export default NavItems;