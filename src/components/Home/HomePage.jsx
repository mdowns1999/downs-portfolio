import Button from "../UI/Button";
import classes from "./HomePage.module.css";
import SkillChart from "./SkillChart";
import resume from "../../assets/files/downsResume.pdf";
import { Link } from "react-router-dom";
import profilePhoto from "../../assets/images/profilePhoto.jpg";

const HomePage = () => {
  return (
    <>
      <div className={classes.home}>
        <div className={classes.homeWrapper}>
          <section className={classes.welcomeBox + " " + classes.fadeIn}>
            <h1>My name is Mike Downs</h1>

            <p className={classes.text}>
              I am a Software Engineer dedicated to building high-quality
              projects. As a student, I am continually learning best practices
              in web development and focusing on implementing effective design
              principles. My goal is to create clean, reusable, and efficient
              code. To see my work, please visit the projects page to see what I
              have done! If you’d like to get in touch, my email is available at
              the bottom of the page or on my resume that is linked below.
            </p>

            <div className={classes.btnBox}>
              <Link to="/projects">
                <Button>See Projects</Button>
              </Link>
            </div>
          </section>
        </div>

        <div className={classes.experienceWrapper}>
          <section className={classes.experienceBox}>
            <img src={profilePhoto} alt="Mike Downs"></img>

            <div>
              <h1>Work Experience</h1>

              <p className={classes.text}>
                I began my programming journey at Brigham Young University –
                Idaho, where I earned a bachelor’s degree in Software
                Engineering and three certificates in Computer Programming,
                Software Design, and Web Development. Through my studies, I
                developed a strong foundation in Python, C#, C++, and full stack
                web development using JavaScript, React, and the MERN stack
                (MongoDB, Express, React, Node).
              </p>

              <p className={classes.text}>
                I’ve worked as a technical intern at FamilySearch, where I
                contributed to the Frontier Core architectural team, maintaining
                and enhancing a React-based design library. I also collaborated
                on FamilySearch Labs, launching a project in just two weeks for
                the RootsTech conference, which attracted 23,000 visitors within
                days of its unveiling. Afterward, I was invited back for a
                second internship on the Tree Web team, where I currently
                develop new features for FamilySearch’s genealogy trees using
                TypeScript, React, and CSS.
              </p>

              <p className={classes.text}>
                In addition, I worked with Hangar Marketing, helping to maintain
                a site for Elavon, a subsidiary of U.S. Bank. I resolved
                deployment issues on the AppDirect platform, republishing the
                site and implementing key updates within three weeks after the
                site was left unmaintained for about six months. Currently, I
                continue to provide support through training, bug fixes, and
                package updates.
              </p>

              <div className={classes.btnBox}>
                <a href={resume} target="_blank" rel="noreferrer">
                  <Button>See Resume</Button>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className={classes.skilsWrapper}>
          <section className={classes.skillsBox}>
            <SkillChart />
            <div className={classes.skillsContent}>
              <h1>My Skills</h1>
              <p className={classes.text}>
                I have worked on a variety of projects and am proficient in
                several programming languages, including Python, C++, HTML, CSS,
                JavaScript, and MySQL. While my familiarity varies, I have
                experience with some JavaScript frameworks such as React and Angular,
                as well as backend development using Node.js, Express, and
                MongoDB. The progress bars below indicate my proficiency in each
                language and framework.
              </p>

              <p className={classes.text}>
                Outside of programming, I am diligent and thrive in team
                environments. My strong time management skills and work ethic,
                developed through my previous roles, enable me to contribute
                effectively. For more details about my work history, please
                refer to my resume.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
