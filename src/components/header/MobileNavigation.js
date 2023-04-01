import classes from "./mobileNavigation.module.css";
import { NavLink } from "react-router-dom";

const MobileNavigation = (props) => {
  const activeClass = ({ isActive }) => (isActive ? classes.active : "");
  return (
    <div className={classes.navigation}>
      <NavLink to='/' className={activeClass} onClick={props.onClick}>
        Home
      </NavLink>

      <NavLink to='/about' className={activeClass} onClick={props.onClick}>
        About
      </NavLink>

      <NavLink to='/services' className={activeClass} onClick={props.onClick}>
        Services
      </NavLink>

      <NavLink to='/projects' className={activeClass} onClick={props.onClick}>
        Projects
      </NavLink>

      <NavLink to='/contact' className={activeClass} onClick={props.onClick}>
        Contact us
      </NavLink>
    </div>
  );
};

export default MobileNavigation;
