import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

const spacingMap = {
  none: 0,
  xxs: '0.5rem',
  xs: '1rem',
  sm: '2rem',
  md: '4rem',
  lg: '6rem',
  xl: '8rem',
};

export default function LayoutBand({ spacing = 'sm', spacingDirection = 'vertical', children, sx = {}, ...props }) {
  const p = spacingMap[spacing];
  const paddingSx =
    spacingDirection === 'vertical' ? { py: p }
    : spacingDirection === 'horizontal' ? { px: p }
    : { p };
  return (
    <Container sx={{ ...paddingSx, ...sx }} {...props}>
      {children}
    </Container>
  );
}

LayoutBand.propTypes = {
  spacing: PropTypes.string,
  spacingDirection: PropTypes.oneOf(['vertical', 'horizontal', 'all']),
  children: PropTypes.node,
  sx: PropTypes.object,
};
