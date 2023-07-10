import { useFormik } from "formik";
import Input from "../home/input";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
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
    <section className={classes.contactForm}>
      <div className={classes.formContainer}>
        <h2 className={classes.formTitle}>
          Potrebna vam je neka pomoć?? Pošaljite nam poruku
        </h2>
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
    </section>
  );
};

export default ContactForm;
