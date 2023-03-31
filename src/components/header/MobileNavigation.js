import classes from "./mobileNavigation.module.css";

const MobileNavigation = () => {
  return (
    <div className={classes.navigation}>
      <a href='#'>Home</a>

      <a href='#'>About</a>

      <a href='#'>Services</a>

      <a href='#'>Projects</a>

      <a href='#'>Contact us</a>
    </div>
  );
};

export default MobileNavigation;
