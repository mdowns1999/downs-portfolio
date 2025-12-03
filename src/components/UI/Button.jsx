import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from React Router
import classes from "./Button.module.css";

const Button = ({ children, onClick, style, to, external = false, ...rest }) => {

  if (to && external) {
    return (
      <a
        href={to}
        className={classes.button}
        style={style}
        target="_blank" 
        rel="noreferrer"
        {...rest} 
      >
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link to={to} className={classes.button} style={style} {...rest}>
        {children}
      </Link>
    );
  }


  return (
    <button className={classes.button} onClick={onClick} style={style} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  to: PropTypes.string,
  external: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;