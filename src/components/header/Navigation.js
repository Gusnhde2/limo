import classes from "./navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeClass = ({ isActive }) => (isActive ? classes.active : "");
  return (
    <div className={classes.navigation}>
      <NavLink to='/' className={activeClass}>
        Home
      </NavLink>

      <NavLink to='/about' className={activeClass}>
        About
      </NavLink>

      <NavLink to='/services' className={activeClass}>
        Services
      </NavLink>

      <NavLink to='/projects' className={activeClass}>
        Projects
      </NavLink>

      <NavLink to='/contact' className={activeClass}>
        Contact us
      </NavLink>
    </div>
  );
};

export default Navigation;
