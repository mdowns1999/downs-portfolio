import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LayoutBand from '../UI/LayoutBand';
import SkillChip from '../UI/SkillChip';
import Heading from '../UI/Heading';
import getImage from '../../helper/getImage';
import json from '../../assets/project-data/projects.json';

const FILTERS = ['All', 'Web', 'Design', 'Other'];

const filterGroupSx = { mb: 4 };
const toggleBtnSx = {
  px: 3,
  color: 'text.secondary',
  '&.Mui-selected': {
    bgcolor: 'secondary.light',
    color: 'secondary.dark',
    borderColor: 'secondary.main',
  },
};
const cardSx = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  bgcolor: 'background.default',
  textDecoration: 'none',
  color: 'inherit',
  border: '1px solid',
  borderColor: 'divider',
  transition: '0.25s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(47,126,200,0.15)',
    borderColor: 'primary.main',
  },
};
const cardMediaSx = { height: 180, objectFit: 'cover' };
const cardTitleSx = { fontWeight: 700, color: 'text.primary' };
const cardDescSx = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const ProjectPage = () => {
  const [filter, setFilter] = useState('All');

  window.scrollTo(0, 0);

  const filteredProjects = filter === 'All'
    ? json
    : json.filter((p) => p.type === filter);

  return (
    <LayoutBand spacing="md">
      <Heading level="h1" centered>Projects</Heading>

      <Box sx={filterGroupSx}>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(_, val) => val && setFilter(val)}
        >
          {FILTERS.map((f) => (
            <ToggleButton key={f} value={f} sx={toggleBtnSx}>{f}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Grid container spacing={3}>
        {filteredProjects.map((project) => {
          const image = getImage(project.name);
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <Card component={Link} to={`/projects/${project.id}`} sx={cardSx}>
                <CardMedia component="img" image={image} alt={project.name} sx={cardMediaSx} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" sx={cardTitleSx}>{project.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={cardDescSx}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                    {project.skills?.slice(0, 3).map((s) => (
                      <SkillChip key={s} label={s} />
                    ))}
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </LayoutBand>
  );
};

export default ProjectPage;
