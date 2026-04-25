import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const sizeMap = {
  nano: '0.25rem',
  xxs: '0.5rem',
  xs: '1rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '3rem',
  xl: '4rem',
  xxl: '5rem',
};

export default function Separator({ size = 'md', showLine = false, lineColor, sx = {}, ...props }) {
  return (
    <Box sx={{ height: sizeMap[size] || sizeMap.md, width: '100%', display: 'flex', alignItems: 'center', ...sx }} {...props}>
      {showLine && <Divider sx={{ width: '100%', borderColor: lineColor || 'divider' }} />}
    </Box>
  );
}

Separator.propTypes = {
  size: PropTypes.string,
  showLine: PropTypes.bool,
  lineColor: PropTypes.string,
  sx: PropTypes.object,
};
