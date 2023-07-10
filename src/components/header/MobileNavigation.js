import classes from "./mobileNavigation.module.css";
import { NavLink } from "react-router-dom";

const MobileNavigation = (props) => {
  const activeClass = ({ isActive }) => (isActive ? classes.active : "");
  return (
    <div className={classes.navigation}>
      <NavLink to="/" className={activeClass} onClick={props.onClick}>
        Naslovna
      </NavLink>

      <NavLink to="/about" className={activeClass} onClick={props.onClick}>
        O nama
      </NavLink>

      {/* <NavLink to='/services' className={activeClass} onClick={props.onClick}>
        Services
      </NavLink> */}

      <NavLink to="/projects" className={activeClass} onClick={props.onClick}>
        Projekti
      </NavLink>

      <NavLink to="/contact" className={activeClass} onClick={props.onClick}>
        Kontakt
      </NavLink>
    </div>
  );
};

export default MobileNavigation;
