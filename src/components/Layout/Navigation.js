import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
    <ul className={classes.navList}>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
  );
};

export default Navigation;
