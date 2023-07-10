import classes from "../overlay/modal.module.css";
import Logo from "../header/logo.js";
import { FaLocationArrow } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import MobileNavigation from "../header/MobileNavigation";

const Sidebar = (props) => {
  return (
    <div className={props.className}>
      <Logo
        className={classes.logo}
        color="#fff"
        background="#222"
        width="18.75rem"
      />
      <content>
        <h3>O nama</h3>
        <p>
          The argument in favor of using filler text goes something like this:
          If you use real content in the Consulting Process, anytime you reach a
          review point you’ll end up reviewing and negotiating the content
          itself and not the design.
        </p>

        <button className={classes.sidebarBtn}>Konsultacije</button>

        <h3>Kontakt infomacije</h3>
        <ul>
          <li>
            <FaLocationArrow className={classes.contactIcon} />
            <address>Cazin, Ćoralići 190</address>
          </li>
          <li>
            <GiPhone className={classes.contactIcon} />
            <phone>+387 61 759 944</phone>
          </li>
          <li>
            <HiOutlineMail className={classes.contactIcon} />
            <email>limomontaza@gmail.com</email>
          </li>
        </ul>
      </content>
      <button className={classes.exitBtn} onClick={props.onClick}>
        X
      </button>
      <MobileNavigation onClick={props.onClick} />
    </div>
  );
};

export default Sidebar;
