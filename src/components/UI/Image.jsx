import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Image({ src, alt, className, style, to, external = false, ...props }) {
  const img = <img src={src} alt={alt} className={className} style={style} loading="lazy" {...props} />;
  if (!to) return img;
  if (external) return <a href={to} target="_blank" rel="noreferrer">{img}</a>;
  return <Link to={to}>{img}</Link>;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  to: PropTypes.string,
  external: PropTypes.bool,
};
