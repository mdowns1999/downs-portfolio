import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayoutBand from '../UI/LayoutBand';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';
import Separator from '../UI/Separator';
import SkillChip from '../UI/SkillChip';
import Image from '../UI/Image';
import data from '../../assets/project-data/projects.json';
import getImage from '../../helper/getImage';

const photoStyle = { width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(47,126,200,0.15)' };
const skillsLabelSx = { color: 'text.secondary', letterSpacing: '0.08em' };
const chipsStackSx =   { mt: 1, mb: 3, flexWrap: "wrap", gap: 0.5, minWidth: 0 }
const btnsStackSx = { mt: 1 };

const ProjectDetailPage = () => {
  const params = useParams();
  const project = data.find((p) => p.id === +params.id);
  const image = getImage(project.name);

  window.scrollTo(0, 0);

  return (
    <LayoutBand spacing="lg">
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Image src={image} alt={project.name} style={photoStyle} />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Heading level="h1">{project.name}</Heading>
          <Paragraph>{project.description}</Paragraph>
          <Separator size="sm" />
          <Typography variant="overline" sx={skillsLabelSx}>Skills</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={chipsStackSx}>
            {project.skills.map((s) => (
              <SkillChip key={s} label={s} />
            ))}
          </Stack>
          <Stack direction="row" spacing={2} sx={btnsStackSx}>
            {project.links.map((l, i) => (
              <Button
                key={l.name}
                variant={i === 0 ? 'contained' : 'outlined'}
                color={i === 0 ? 'secondary' : 'primary'}
                href={l.link}
                target="_blank"
                rel="noreferrer"
              >
                {l.name}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </LayoutBand>
  );
};

export default ProjectDetailPage;
