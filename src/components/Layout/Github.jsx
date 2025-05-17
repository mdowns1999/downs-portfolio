import githubLogo from "../../assets/images/github-mark.png";
import Image from "../UI/Image";
import classes from "./Github.module.css";

const Github = () => {
  return (
    <Image
      to="https://github.com/mdowns1999"
      className={classes.githubLogo}
      src={githubLogo}
      alt="Github Logo"
      external
    />
  );
}; 

export default Github;
