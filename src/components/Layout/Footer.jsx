import classes from "./Footer.module.css";
import LinkedIn from "../../assets/images/In-White-40.png"
const Footer = () => {
  //Get Year for Footer
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.contact}>
        <p>Contact Me:</p>
        <a href="mailto:michaeljdowns99@gmail.com">michaeljdowns99@gmail.com</a>
      </div>
      <div className={classes.copyright}>&copy; Mike Downs {year}</div>
      <div className={classes.social}>
        <a
          href="https://www.linkedin.com/in/mike-downs/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className={classes.linkedin}
            src={LinkedIn}
            alt="LinkedIn Logo"
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
