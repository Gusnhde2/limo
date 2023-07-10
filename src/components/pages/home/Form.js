import { Fragment } from "react";
import { useFormik } from "formik";
import Input from "./input";
import classes from "./Form.module.css";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      text: "",
    },
    onSubmit: (values) => {
      console.log("Submited");
    },
  });

  return (
    <div className={classes.formContainer}>
      <h3>Rezervišite termin...</h3>
      <h2 className={classes.formTitle}>Potrebna vam je pomoć?</h2>
      <form onSubmit={formik.handleSubmit}>
        <Input
          inputType="name"
          label="Ime"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <Input
          inputType="lastname"
          label="Prezime"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />

        <Input
          inputType="email"
          label="E-Mail"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <Input
          inputType="phone"
          label="Telefon"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />

        <Input
          inputType="text"
          label="Vaša poruka"
          onChange={formik.handleChange}
          value={formik.values.text}
          className={classes.textInput}
        />

        <button className={classes.formButton} type="submit">
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default Form;
