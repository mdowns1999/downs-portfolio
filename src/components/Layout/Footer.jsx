import classes from "./Footer.module.css";
import LinkedIn from "../../assets/images/In-White-40.png"
import Paragraph from "../UI/Paragraph";
import Image from "../UI/Image";
const Footer = () => {
  //Get Year for Footer
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.contact}>
        <Paragraph style={{'color':'white', 'margin': 0}}>Contact Me:</Paragraph>
        <a href="mailto:michaeljdowns99@gmail.com">michaeljdowns99@gmail.com</a>
      </div>
      <Paragraph style={{'color':'white', 'margin': 0}}>&copy; Mike Downs {year}</Paragraph>
  
   
          <Image
          to="https://www.linkedin.com/in/mike-downs/"
          className={classes.social}
            src={LinkedIn}
            alt="LinkedIn Logo"
          />
    
 
    </footer>
  );
};

export default Footer;
