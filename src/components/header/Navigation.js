import classes from "./navigation.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const activeClass = ({ isActive }) => (isActive ? classes.active : "");
  return (
    <div className={classes.navigation}>
      <NavLink to='/' className={activeClass}>
        Naslovna
      </NavLink>

      <NavLink to='/about' className={activeClass}>
        O nama
      </NavLink>

      <NavLink to='/services' className={activeClass}>
        Usluge
      </NavLink>

      <NavLink to='/projects' className={activeClass}>
        Projekti
      </NavLink>

      <NavLink to='/contact' className={activeClass}>
        Kontakt
      </NavLink>
    </div>
  );
};

export default Navigation;
