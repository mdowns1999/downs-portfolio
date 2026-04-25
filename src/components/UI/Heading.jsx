import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function Heading({ level = 'h1', size, centered = false, children, bold = false, sx = {}, ...props }) {
  return (
    <Typography
      variant={size || level}
      component={level}
      gutterBottom
      sx={{ fontWeight: bold ? 700 : undefined, textAlign: centered ? 'center' : 'left', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
}

Heading.propTypes = {
  level: PropTypes.string,
  size: PropTypes.string,
  centered: PropTypes.bool,
  children: PropTypes.node,
  bold: PropTypes.bool,
  sx: PropTypes.object,
};
