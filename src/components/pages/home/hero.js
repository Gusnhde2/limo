import { FaCheck } from "react-icons/fa";
import classes from "./hero.module.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log(scrolled);
  };
  return (
    <section className={classes.heroSection}>
      <div className={classes.container}>
        <div className={classes.textWrapper}>
          <h3>Pametna riješenja...</h3>
          <h1>Gdje se spaja tradicija i kvalitet</h1>
          <div className={classes.qoute}>
            Građevinski obrt za izgradnju krovne konstrukcije i ugradnju krovnih
            elemenata od čeličnog lima.
          </div>
          <div>
            <Link
              to='/contact'
              className={classes.heroBtn}
              onClick={toggleVisible}></Link>
            <div className={classes.expirience}>
              <div className={classes.checkWrap}>
                <FaCheck className={classes.check} />
              </div>

              <div className={classes.qoute}>30+ Godina iskustva</div>
            </div>
          </div>
        </div>
        <div className={classes.background}></div>
      </div>
    </section>
  );
};

export default HeroSection;
