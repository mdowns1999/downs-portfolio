import PropTypes from "prop-types"; // Import PropTypes
import { NavLink } from "react-router-dom";
import classes from "./NavItems.module.css";
import { motion } from "framer-motion";

// Define the NavItems component
const NavItems = ({ onClick }) => {
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
        onClick={onClick}
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
        onClick={onClick}
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

// Define PropTypes for the NavItems component
NavItems.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick should be a function and is required
};

export default NavItems;