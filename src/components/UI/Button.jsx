import PropTypes from "prop-types"; // Import PropTypes
import classes from "./Button.module.css";

// Define the Button component
const Button = ({ children, onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

// Define PropTypes for the Button component
Button.propTypes = {
  children: PropTypes.node.isRequired, // children can be any renderable React node and is required
  onClick: PropTypes.func.isRequired,   // onClick should be a function and is required
};

export default Button;