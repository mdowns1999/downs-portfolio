import classes from './NavDesktop.module.css'
import NavItems from './NavItems';

const NavDesktop= () => {
  // const [isClicked, setIsClicked] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // const hamBtnHandler = () => {
  //   setIsClicked(!isClicked);
  // }

  //   //Choose the screen size and let the component know if th escreen changes.  This will help the slideshow size a little better.
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setIsMobile(true);
  //     } else {
  //       setIsMobile(false);
  //     }
  //   };

  //    // create an event listener
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   console.log(isMobile)
  // }, [isMobile]);

  //   const btnClasses = `${classes.navList} ${!isClicked && isMobile ? classes.item : ""}`;


  return (
    <nav className={classes.navigation}>
      <ul className={classes.navList}>
        <NavItems/>
      </ul>
    </nav>
  );
};

export default NavDesktop;