import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import classes from "./NavMobile.module.css";
import NavItems from "./NavItems";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div ref={ref} className={classes.mobileNavBox}>
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} color="white"/>
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
