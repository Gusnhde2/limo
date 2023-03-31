import classes from "../overlay/modal.module.css";
import Logo from "../header/logo.js";
import { FaLocationArrow } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import MobileNavigation from "../header/MobileNavigation";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Logo
        className={classes.logo}
        color='#fff'
        background='#222'
        width='18.75rem'
      />
      <content>
        <h3>About us</h3>
        <p>
          The argument in favor of using filler text goes something like this:
          If you use real content in the Consulting Process, anytime you reach a
          review point you’ll end up reviewing and negotiating the content
          itself and not the design.
        </p>

        <button className={classes.sidebarBtn}>Consultation</button>

        <h3>Contact info</h3>
        <ul>
          <li>
            <FaLocationArrow className={classes.contactIcon} />
            <address>Chicago 12, Melborne City, USA</address>
          </li>
          <li>
            <GiPhone className={classes.contactIcon} />
            <phone>111 111-1111</phone>
          </li>
          <li>
            <HiOutlineMail className={classes.contactIcon} />
            <email>roonix@gmail.com</email>
          </li>
        </ul>
      </content>
      <MobileNavigation />
    </div>
  );
};

export default Sidebar;
