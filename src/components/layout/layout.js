import { Fragment } from "react";
import Header from "../header/Header";
import classes from "./layout.module.css";
import Footer from "../footer/footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
