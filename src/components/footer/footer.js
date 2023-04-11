import React from "react";
import { MdCall } from "react-icons/md";
import classes from "./footer.module.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes.contact}>
        <p>Kontaktirajte nas: </p>
        <a href='tel:+38761759944'>
          <MdCall className={classes.icon} /> +387 61 759 944
        </a>
        <a className={classes.mail} href='mailto:limomontaza@gmail.com'>
          limomontaza@gmail.com
        </a>
        <div className={classes.social}>
          <a href='https://www.facebook.com/people/Limomonta%C5%BEa-Lepuzanovi%C4%87/100063087947387/'>
            <FaFacebook className={classes.icon} />
          </a>
          <a href='https://www.google.com/search?q=Limomonta%C5%BEa+Lepuzanovi%C4%87&stick=H4sIAAAAAAAA_-NgU1I1qDAxNzM0sUxKTDROszQ1S06yMqgwM0lKTjZKMjQzMTNITEkzWsQq6ZOZm5-bn1eSeHRfooJPakFpVWJeflnmkXYAhMyPcEUAAAA&hl=bs&mat=CTfjKl1TTAvrElcBpsFAC0mPKQAZk5zmr_MjdrhnnlSjV5s9XBXyidGMot6LKb5UAPhPKsWn3xVnuFeUst3EDcNt00fFE1rsJRcU9m3Ydnf0U_z9TQB8N4Kh-pn0f7YASFI&authuser=0'>
            <FaGoogle className={classes.icon} />
          </a>
        </div>
      </section>
      <section className={classes.footerSection}>
        <h3>NAŠE USLUGE</h3>
        <ul>
          <li>Izgradnja krova</li>
          <li>Ugradnja oluka</li>
          <li>Pokrivka</li>
          <li>Popravke krova</li>
          <li>Renoviranje krova</li>
          <li>Proizovdnja elemata</li>
        </ul>
      </section>
      <section className={classes.footerSection}>
        <h3>KORISNI LINKOVI</h3>
        <ul>
          <li>
            <NavLink to='/'>Naslovna</NavLink>
          </li>
          <li>
            <NavLink to='/about'>O nama</NavLink>
          </li>
          <li>
            <NavLink to='/services'>Usluge</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projekti</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Kontakt</NavLink>
          </li>
        </ul>
      </section>
      <section className={classes.footerLocation}>
        <h3>LOKACIJA</h3>
        <ul>
          <li>
            <a
              href='https://www.google.com/maps/dir//limomonta%C5%BEa+lepuzanovi%C4%87+cazin+radno+vrijeme/@44.896897,15.7309519,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x476149baa3f956cb:0x64bcc2b16460adf2!2m2!1d15.8992731!2d44.9833465?hl=bs'
              className={classes.location}>
              <GoLocation className={classes.icon} />
            </a>

            <p>
              Kliknite ovdje <br /> za lokaciju
            </p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
