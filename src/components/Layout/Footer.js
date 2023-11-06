import classes from "./Footer.module.css";

const Footer = () => {
  //Get Year for Footer
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div>&copy; Mike Downs {year}</div>
    </footer>
  );
};

export default Footer;
