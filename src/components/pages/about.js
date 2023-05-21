import { Fragment, useEffect, useState } from "react";
import PageTitle from "../UI/PageTitle";
import classes from "./About.module.css";
import { GoMail } from "react-icons/go";
import { MdCall } from "react-icons/md";

const About = () => {
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState();

  const setScroledHandler = () => {
    const scroll = document.documentElement.scrollTop;
    setScrolled(scroll);
  };

  window.addEventListener("scroll", setScroledHandler);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrolled > 1000 && count < 38) {
        setCount(count + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count, scrolled]);

  return (
    <Fragment>
      <PageTitle pageName='O nama' />
      <section>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <div className={classes.expirienceBox}>
              <div className={classes.counter}>{count}</div>
              <div className={classes.boxtext}>Years of expirience</div>
            </div>
          </div>

          <div className={classes.textContainer}>
            <div>
              <h3>About company...</h3>
              <h2>PROFESSIONAL AND EXPERT ROOFING CONTRACTOR</h2>
              <p>
                With more than four decades of proven success in quality roofing
                services, Shelder Roofing and Retro-Fit group is a family-owned
                & operated business serving the greater San Fransisco area
                state. Our expert team has been dedicated to providing the best
                service and quality available in the area.
              </p>
            </div>
            <div className={classes.infoCards}>
              <div className={classes.infoCard}>
                <GoMail className={classes.icon} />
                <a
                  className={classes.aboutMail}
                  href='mailto:limomontaza@gmail.com'>
                  limomontaza@gmail.com
                </a>
                <p>Slobodno pišite</p>
              </div>
              <div className={classes.infoCard}>
                <MdCall className={classes.icon} />
                <a className={classes.aboutMail} href='tel:+38761759944'>
                  Ibrahim: 061 759 944
                </a>
                <a className={classes.aboutMail} href='tel:+38762322445'>
                  Muho: 062 322 445
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
