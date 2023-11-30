import { useClickAway } from "react-use";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import classes from "./NavMobile.module.css";
import NavItems from "./NavItems";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      setOpen(false);
      setIsClicked(false);
    }
  }, [isClicked]);

  return (
    <div ref={ref} className={classes.mobileNavBox}>
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
      {isOpen && (
        <nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={classes.mobileNav}
        >
          <ul>
            <NavItems onClick={handleClick} />
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavMobile;
