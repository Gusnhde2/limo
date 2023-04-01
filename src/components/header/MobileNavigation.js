import classes from "./mobileNavigation.module.css";

const MobileNavigation = (props) => {
  return (
    <div className={classes.navigation}>
      <a onClick={props.onClick} href='#'>
        Home
      </a>

      <a onClick={props.onClick} href='#'>
        About
      </a>

      <a onClick={props.onClick} href='#'>
        Services
      </a>

      <a onClick={props.onClick} href='#'>
        Projects
      </a>

      <a onClick={props.onClick} href='#'>
        Contact us
      </a>
    </div>
  );
};

export default MobileNavigation;
