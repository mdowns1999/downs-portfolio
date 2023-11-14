import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hamBtnHandler = () => {
    setIsClicked(!isClicked);
  }

    //Choose the screen size and let the component know if th escreen changes.  This will help the slideshow size a little better.
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

     // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(isMobile)
  }, [isMobile]);

    const btnClasses = `${classes.navList} ${!isClicked && isMobile ? classes.item : ""}`;


  return (
    <nav className={classes.navigation}>
    <span className={classes.ham} onClick={hamBtnHandler}></span>
      <ul className={classes.navList}>
        <li className={btnClasses}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className={btnClasses}>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;