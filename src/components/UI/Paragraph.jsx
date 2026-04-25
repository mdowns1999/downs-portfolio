import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const sizeMap = { xs: 'caption', sm: 'body2', md: 'body1', lg: 'h6' };

export default function Paragraph({ centered = false, children, size = 'md', sx = {}, ...props }) {
  return (
    <Typography
      component="p"
      variant={sizeMap[size]}
      gutterBottom
      sx={{ textAlign: centered ? 'center' : 'left', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
}

Paragraph.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  sx: PropTypes.object,
};
