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
              development. I study and implement good design practices to strive
              to make my code clean, reusable, and efficient.
            </p>

            <p className={classes.text}>
              Interested in what I know or can do? Click the button below to
              learn more about the projects I have built and what languages I
              have used to build them! I have used many languages in my
              projects.
            </p>

            <div className={classes.btnBox}>
              <Button>
                <Link to="/projects">See Projects</Link>
              </Button>
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
                Even though I am farily new to programming, I strive to develop
                quality code and projects. I know a handful of languages. I am
                more familiar with some than others, but those languages
                include: Python, C++, HTML, CSS, Javascript, and MYSQL. The
                progress bars down below show my exact familiarity with each
                language.
              </p>

              <p className={classes.text}>
                Outside of programming, I strive to be diligent in my work and
                work well with teams. I am good at time management and have
                developed a good work ethic from my previous jobs. To see some
                of the other jobs I have worked, feel free to look at my resume
                below.
              </p>
              <div className={classes.btnBox}>
                <Button>
                  <a href={resume} target="_blank" rel="noreferrer">
                    See Resume
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <div className={classes.aboutBox}><p className={classes.text}>
          I am a Software Engineer that strives to build quality projects. I am
          a student learning the best practices in the world of web development.
          I study and implement good design practices to strive to make my code
          clean, reusable, and efficient.
        </p>

        <p className={classes.text}>
          Interested in what I know or can do? Click the button below to learn
          more about the projects I have built and what languages I have used to
          build them! I have used many languages in my projects.
        </p></div> */}
    </>
  );
};

export default HomePage;
