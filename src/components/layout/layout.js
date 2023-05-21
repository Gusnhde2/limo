import { Fragment } from "react";
import Header from "../header/Header";
import classes from "./layout.module.css";
import Footer from "../footer/footer";
import ScrollButton from "./ScrollButton";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <ScrollButton />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
