import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';

export default function SkillChip({ label, ...props }) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        bgcolor: 'secondary.light',
        color: 'secondary.dark',
        border: '1px solid',
        borderColor: 'secondary.main',
        fontWeight: 600,
      }}
      {...props}
    />
  );
}

SkillChip.propTypes = {
  label: PropTypes.string.isRequired,
};
