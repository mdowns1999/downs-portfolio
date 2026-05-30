import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Heading from "../UI/Heading";
import Paragraph from "../UI/Paragraph";
import Separator from "../UI/Separator";
import LayoutBand from "../UI/LayoutBand";
import Image from "../UI/Image";
import profilePhoto from "../../assets/images/profilePhoto.jpg";
import resume from "../../assets/files/downsResume.pdf";

const SKILLS = [
  { name: "Javascript", percentage: 70 },
  { name: "HTML", percentage: 70 },
  { name: "CSS", percentage: 70 },
  { name: "React", percentage: 60 },
  { name: "C++", percentage: 50 },
  { name: "MySQL", percentage: 60 },
  { name: "Node/Express", percentage: 50 },
  { name: "Python", percentage: 40 },
  { name: "C#", percentage: 40 },
];

const heroSx = {
  bgcolor: "background.paper",
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
};
const heroContentSx = { maxWidth: "680px", mx: "auto" };
const ctaBtnSx = { mt: 1 };

const workSectionSx = { bgcolor: "background.default" };
const workPhotoStyle = { width: "100%", borderRadius: "12px" };

const skillsSectionSx = { bgcolor: "background.paper" };
const barSx = { height: 8, borderRadius: 4, bgcolor: "divider" };
const barLabelSx = { mb: 0.5, color: "text.secondary", fontWeight: 600 };

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
              <Image
                src={profilePhoto}
                alt="Mike Downs"
                style={workPhotoStyle}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Heading level="h2">Work Experience</Heading>
              <Paragraph>
                I began my programming journey at Brigham Young University –
                Idaho, where I earned a bachelor&apos;s degree in Software
                Engineering along with certificates in Computer Programming,
                Software Design, and Web Development. Through my studies, I
                built a strong foundation in Python, C#, C++, and full-stack web
                development with a focus on the MERN stack (MongoDB, Express,
                React, Node).
              </Paragraph>
              <Paragraph>
                I have spent the majority of my professional career at
                FamilySearch, progressing through multiple roles and teams. I
                started as a technical intern on the Frontier Core architectural
                team, maintaining and enhancing a React-based design library. I
                also collaborated on FamilySearch Labs, where I helped launch a
                project in just two weeks for the RootsTech conference that
                attracted 23,000 visitors within days of its release. I returned
                for a second internship on the Tree Web team, developing new
                features for FamilySearch&apos;s genealogy trees using
                TypeScript, React, and CSS, before transitioning to a full-time
                role as a Software Developer 2.
              </Paragraph>
              <Paragraph>
                On the Chinese Ginkgo team, I supported Chinese patrons by
                maintaining the First Ancestor app and building discovery
                experiences — including Tree Designs, which allows users to
                display their family tree in artistic layouts, and a Digital
                Scrapbook for preserving stories and memories. I also
                contributed to a serverless printing service built on AWS Lambda
                and Puppeteer. I currently work on the Automated Tree Building
                Extensions team, focused on expanding FamilySearch&apos;s
                tree-building capabilities.
              </Paragraph>
              <Paragraph>
                In addition, I worked with Hangar Marketing supporting Elavon, a
                subsidiary of U.S. Bank. Within three weeks, I resolved
                deployment issues on the AppDirect platform and implemented key
                updates after the site had gone unmaintained for roughly six
                months, restoring stability through bug fixes, package updates,
                and stakeholder training.
              </Paragraph>
              <Button
                variant="outlined"
                color="primary"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
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
              <Typography
                variant="body2"
                sx={{ mb: 2, color: "text.secondary" }}
              >
                A chart showing my level of knowledge for each language
              </Typography>
              {SKILLS.map((skill) => (
                <Box key={skill.name} sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={barLabelSx}>
                    {skill.name}
                  </Typography>
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
                and MongoDB. The progress bars to the left indicate my
                proficiency in each language and framework.
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
