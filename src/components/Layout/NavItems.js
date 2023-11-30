import { NavLink } from "react-router-dom";
import classes from "./NavItems.module.css";
import { motion } from "framer-motion";

const NavItems = (props) => {
  return (
    <>
      <motion.li
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1 + 0 / 10,
        }}
        className={classes.item}
        onClick={props.onClick}
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1 + 1 / 10,
        }}
        className={classes.item}
        onClick={props.onClick}
      >
        <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Projects
        </NavLink>
      </motion.li>
    </>
  );
};

export default NavItems;
