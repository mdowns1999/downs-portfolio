import Button from "../UI/Button";
import classes from "./HomePage.module.css";
import SkillChart from "./SkillChart";
import resume from "../../assets/files/downsResume.pdf";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className={classes.home}>
        <div className={classes.homeWrapper}>
          <section className={classes.welcomeBox + " " + classes.fadeIn}>
            <h1>My name is Mike Downs</h1>

            <p className={classes.text}>
              I am a Software Engineer that strives to build quality projects. I
              am a student learning the best practices in the world of web
              development as well as how to implement good design practices to
              strive to make my code clean, reusable, and efficient. If you want
              to see what I have done, check out the projects page to see what I
              have built! If you want to get ahold of me, you will find my email
              at the bottom of the page or on my resume.
            </p>

            <div className={classes.btnBox}>
            <Link to="/projects">
              <Button>
               See Projects
              </Button>
              </Link>
            </div>
          </section>
        </div>

        <section className={classes.aboutBox}>
          <div>
            <h1>Personal life</h1>

            <p className={classes.text}>
              I was born and raised in Rexburg Idaho. I graduated from Madison
              High School in 2017. I then served a two year mission for the
              Church of Jesus Christ of Latter Day Saints. After returning from
              my mission I started attending school at Brigham Young University
              - Idaho (BYU-I).I enjoy the outdoors, reading, and being with my
              family.
            </p>

            <p className={classes.text}>
              My current major is Software Engineering. In my major, I am also
              working on certificates in Software Desgin, Web Development, and
              general computer programming.
            </p>
          </div>

          <img
            src={require("../../assets/images/profilePhoto.jpg")}
            alt="Mike Downs"
          ></img>
        </section>

        <div className={classes.skilsWrapper}>
          <section className={classes.skillsBox}>
            <SkillChart />
            <div className={classes.skillsContent}>
              <h1>My Skills</h1>
              <p className={classes.text}>
                I have worked on a number of projects. I know a handful of
                languages. I am more familiar with some than others, but those
                languages include: Python, C++, HTML, CSS, Javascript, and
                MYSQL. I have also used Javascript frameworks like React and
                Angular. I have also done a little backend work with Node,
                Epxress, and MongoDB. The progress bars down below show my exact
                familiarity with each language.
              </p>

              <p className={classes.text}>
                Outside of programming, I strive to be diligent in my work and
                work well with teams. I am good at time management and have
                developed a good work ethic from my previous jobs. To see some
                of the other jobs I have worked, feel free to look at my resume
                below.
              </p>
              <div className={classes.btnBox}>
                <a href={resume} target="_blank" rel="noreferrer">
                  <Button>See Resume</Button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
