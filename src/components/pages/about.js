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
    const windowHeight = window.innerHeight;
    const interval = setInterval(() => {
      if (scrolled > windowHeight / 2 && count < 38) {
        setCount(count + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count, scrolled]);

  return (
    <Fragment>
      <PageTitle pageName="O nama" />
      <section>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <div className={classes.expirienceBox}>
              <div className={classes.counter}>{count}</div>
              <div className={classes.boxtext}>Godina iskustva</div>
            </div>
          </div>

          <div className={classes.textContainer}>
            <div>
              <h3>O nama...</h3>
              <h2>PROFESIONALIZAM I ISKUSTVO</h2>
              <p>
                Naša priča započela je prije 38 godina, kada smo kao porodični
                obrt započeli proizvodnju i montažu limenih krovova. Kroz godine
                rada i posvećenosti, stekli smo znanje i vještine koje nas čine
                posebnim u našoj industriji. Naša strast prema kvaliteti i
                detaljima vidljiva je u svakom projektu na kojem radimo. Sa
                ponosom ističemo da koristimo samo najkvalitetnije materijale i
                najnovije tehnologije u našem procesu proizvodnje. Naš tim
                stručnjaka sastavljen je od iskusnih majstora koji su posvećeni
                pružanju vrhunske izrade i besprijekorne montaže. Bez obzira na
                veličinu projekta, od malih stambenih kuća do velikih poslovnih
                zgrada, pristupamo svakom zadatku s istom pažnjom i predanošću.
              </p>
            </div>
            <div className={classes.infoCards}>
              <div className={classes.infoCard}>
                <GoMail className={classes.icon} />
                <a
                  className={classes.aboutMail}
                  href="mailto:limomontaza@gmail.com"
                >
                  limomontaza@gmail.com
                </a>
                <p>Slobodno pišite</p>
              </div>
              <div className={classes.infoCard}>
                <MdCall className={classes.icon} />
                <a className={classes.aboutMail} href="tel:+38761759944">
                  Ibrahim: 061 759 944
                </a>
                <a className={classes.aboutMail} href="tel:+38762322445">
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
