import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import classes from './Image.module.css';

const Image = ({
  src,
  alt,
  className,
  style,
  to, 
  external = false,
  ...props 
}) => {

  const imgElement = (
    <img
      src={src}
      alt={alt}
      className={`${classes.image} ${className || ''}`.trim()}
      style={style}
        {...props}
    />
  );

  if (to) {
    if (external) {
      return (
        <a
          href={to}
          className={classes.imageLink}
          {...props}
          rel="noreferrer" target="_blank"
        >
          {imgElement}
        </a>
      );
    } else {
      return (
        <Link
          to={to}
          className={classes.imageLink}
          {...props}
        >
          {imgElement}
        </Link>
      );
    }
  }

  return imgElement;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  to: PropTypes.string, 
};

export default Image;