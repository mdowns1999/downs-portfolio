import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
// import { AnimatePresence, motion } from "framer-motion";
import classes from './NavMobile.module.css';
import NavItems from "./NavItems";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className={classes.mobileNavBox}>
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
      {isOpen && (
        <nav className={classes.mobileNav}>
            <ul>
            <NavItems/>
            </ul>
        </nav>
      )}
    </div>
  );
};

export default NavMobile;

