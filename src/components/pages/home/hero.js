import { FaCheck } from "react-icons/fa";
import classes from "./hero.module.css";

const HeroSection = () => {
  return (
    <section className={classes.heroSection}>
      <div className={classes.container}>
        <div className={classes.textWrapper}>
          <p>SMART SOLUTION...</p>
          <h1>The best roofing company</h1>
          <div className={classes.qoute}>
            Roofing whenan unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </div>
          <div>
            <a className={classes.heroBtn}></a>
            <div className={classes.expirience}>
              <div className={classes.checkWrap}>
                <FaCheck className={classes.check} />
              </div>

              <div className={classes.qoute}>30+ Years of exirience</div>
            </div>
          </div>
        </div>
        <div className={classes.background}></div>
      </div>
    </section>
  );
};

export default HeroSection;
