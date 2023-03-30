import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>

        <li>
          <a href='#'>Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
