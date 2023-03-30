import classes from "../overlay/modal.module.css";
import Logo from "../header/logo.js";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Logo color='#fff' background='#222' width='300' />
      <content>
        <h3>About us</h3>
        <p>
          The argument in favor of using filler text goes something like this:
          If you use real content in the Consulting Process, anytime you reach a
          review point you’ll end up reviewing and negotiating the content
          itself and not the design.
        </p>

        <button className={classes.sidebarBtn}>Consultation</button>
      </content>
    </div>
  );
};

export default Sidebar;
