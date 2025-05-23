import Button from "../UI/Button";
import classes from "./HomePage.module.css";
import SkillChart from "./SkillChart";
import resume from "../../assets/files/downsResume.pdf";
import profilePhoto from "../../assets/images/profilePhoto.jpg";
import Paragraph from "../UI/Paragraph";
import Image from "../UI/Image";

const HomePage = () => {
  return (
    <>
      <div className={classes.home}>
        <div className={classes.homeWrapper}>
          <section className={classes.welcomeBox + " " + classes.fadeIn}>
            <h1>My name is Mike Downs</h1>

            <Paragraph>
              I am a passionate Software Engineer dedicated to building
              high-quality projects. I am continually learning best practices in
              web development and focusing on implementing effective design
              principles. My goal is to create clean, reusable, and efficient
              code. To explore my work, please visit the projects page. If you
              would like to connect, you can find my email at the bottom of the
              page or in my resume, linked below.
            </Paragraph>

            <Button to="/projects">See Projects</Button>
          </section>
        </div>

        <div className={classes.experienceWrapper}>
          <section className={classes.experienceBox}>
            <Image src={profilePhoto} alt="Mike Downs" />

            <div>
              <h1>Work Experience</h1>

              <Paragraph>
                I began my programming journey at Brigham Young University –
                Idaho, where I earned a bachelor’s degree in software
                engineering and three certificates in Computer Programming,
                Software Design, and Web Development. Through my studies, I
                developed a strong foundation in Python, C#, C++, and full-stack
                web development mainly focusing on the MERN stack (MongoDB,
                Express, React, Node).
              </Paragraph>

              <Paragraph>
                I’ve worked as a technical intern at FamilySearch, where I
                contributed to the Frontier Core architectural team, maintaining
                and enhancing a React-based design library. I also collaborated
                on FamilySearch Labs, launching a project in just two weeks for
                the RootsTech conference, which attracted 23,000 visitors within
                days of its unveiling. Afterward, I was invited back for a
                second internship on the Tree Web team, where I developed new
                features for FamilySearch’s genealogy trees using TypeScript,
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

              <Button to={resume} external>
                See Resume
              </Button>
            </div>
          </section>
        </div>

        <div className={classes.skilsWrapper}>
          <section className={classes.skillsBox}>
            <SkillChart />
            <div className={classes.skillsContent}>
              <h1>My Skills</h1>
              <Paragraph>
                I have worked on a variety of projects and am proficient in
                several programming languages, including Python, C++, HTML, CSS,
                JavaScript, and MySQL. While my familiarity varies, I have
                experience with some JavaScript frameworks such as React and
                Angular, as well as backend development using Node.js, Express,
                and MongoDB. The progress bars below indicate my proficiency in
                each language and framework.
              </Paragraph>

              <Paragraph>
                Outside of programming, I am diligent and thrive in team
                environments. My strong time management skills and work ethic,
                developed through my previous roles, enable me to contribute
                effectively. For more details about my work history, please
                refer to my resume.
              </Paragraph>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
