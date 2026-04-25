import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';
import Separator from '../UI/Separator';
import LayoutBand from '../UI/LayoutBand';
import Image from '../UI/Image';
import profilePhoto from '../../assets/images/profilePhoto.jpg';
import resume from '../../assets/files/downsResume.pdf';

const SKILLS = [
  { name: 'Javascript', percentage: 70 },
  { name: 'HTML', percentage: 70 },
  { name: 'CSS', percentage: 70 },
  { name: 'React', percentage: 60 },
  { name: 'C++', percentage: 50 },
  { name: 'MySQL', percentage: 60 },
  { name: 'Node/Express', percentage: 50 },
  { name: 'Python', percentage: 40 },
  { name: 'C#', percentage: 40 },
];

const heroSx = { bgcolor: 'background.paper', minHeight: '60vh', display: 'flex', alignItems: 'center' };
const heroContentSx = { maxWidth: '680px', mx: 'auto' };
const ctaBtnSx = { mt: 1 };

const workSectionSx = { bgcolor: 'background.default' };
const workPhotoStyle = { width: '100%', borderRadius: '12px' };

const skillsSectionSx = { bgcolor: 'background.paper' };
const barSx = { height: 8, borderRadius: 4, bgcolor: 'divider' };
const barLabelSx = { mb: 0.5, color: 'text.secondary', fontWeight: 600 };

const HomePage = () => {
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <>
      <Box sx={heroSx}>
        <LayoutBand spacing="lg">
          <Box sx={heroContentSx}>
            <Heading level="h1">My name is Mike Downs</Heading>
            <Paragraph size="lg">
              I am a passionate Software Engineer dedicated to building
              high-quality projects. I am continually learning best practices in
              web development and focusing on implementing effective design
              principles. My goal is to create clean, reusable, and efficient
              code. To explore my work, please visit the projects page. If you
              would like to connect, you can find my email at the bottom of the
              page or in my resume, linked below.
            </Paragraph>
            <Separator size="sm" />
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/projects"
              size="large"
              sx={ctaBtnSx}
            >
              See Projects
            </Button>
          </Box>
        </LayoutBand>
      </Box>

      <Box sx={workSectionSx}>
        <LayoutBand spacing="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Image src={profilePhoto} alt="Mike Downs" style={workPhotoStyle} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Heading level="h2">Work Experience</Heading>
              <Paragraph>
                I began my programming journey at Brigham Young University –
                Idaho, where I earned a bachelor&apos;s degree in software
                engineering and three certificates in Computer Programming,
                Software Design, and Web Development. Through my studies, I
                developed a strong foundation in Python, C#, C++, and full-stack
                web development mainly focusing on the MERN stack (MongoDB,
                Express, React, Node).
              </Paragraph>
              <Paragraph>
                I&apos;ve worked as a technical intern at FamilySearch, where I
                contributed to the Frontier Core architectural team, maintaining
                and enhancing a React-based design library. I also collaborated
                on FamilySearch Labs, launching a project in just two weeks for
                the RootsTech conference, which attracted 23,000 visitors within
                days of its unveiling. Afterward, I was invited back for a
                second internship on the Tree Web team, where I developed new
                features for FamilySearch&apos;s genealogy trees using TypeScript,
                React, and CSS. I currently work as a Software Developer 2 on
                the Chinese Ginkgo team.
              </Paragraph>
              <Paragraph>
                In addition, I worked with Hangar Marketing, helping to maintain
                a site for Elavon, a subsidiary of U.S. Bank. I resolved
                deployment issues on the AppDirect platform, republishing the
                site and implementing key updates within three weeks after the
                site was left unmaintained for about six months. During my time
                there, I provided support through training, bug fixes, and
                package updates.
              </Paragraph>
              <Button variant="outlined" color="primary" href={resume} target="_blank" rel="noreferrer">
                See Resume
              </Button>
            </Grid>
          </Grid>
        </LayoutBand>
      </Box>

      <Box sx={skillsSectionSx} ref={ref}>
        <LayoutBand spacing="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Heading level="h2">My Skills</Heading>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                A chart showing my level of knowledge for each language
              </Typography>
              {SKILLS.map((skill) => (
                <Box key={skill.name} sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={barLabelSx}>{skill.name}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={inView ? skill.percentage : 0}
                    color="primary"
                    sx={barSx}
                  />
                </Box>
              ))}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Separator size="xl" />
              <Paragraph>
                I have worked on a variety of projects and am proficient in
                several programming languages, including Python, C++, HTML, CSS,
                JavaScript, and MySQL. While my familiarity varies, I have
                experience with some JavaScript frameworks such as React and
                Angular, as well as backend development using Node.js, Express,
                and MongoDB. The progress bars to the left indicate my proficiency in
                each language and framework.
              </Paragraph>
              <Paragraph>
                Outside of programming, I am diligent and thrive in team
                environments. My strong time management skills and work ethic,
                developed through my previous roles, enable me to contribute
                effectively. For more details about my work history, please
                refer to my resume.
              </Paragraph>
            </Grid>
          </Grid>
        </LayoutBand>
      </Box>
    </>
  );
};

export default HomePage;
