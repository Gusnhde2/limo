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
      alert(values.name + " " + values.lastname + " " + values.email);
    },
  });

  return (
    <section className={classes.contactForm}>
      <div className={classes.formContainer}>
        <h2 className={classes.formTitle}>
          Need any kind of roofing help?? Send us a Massage
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            inputType='name'
            label='Name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <Input
            inputType='lastname'
            label='Lastname'
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />

          <Input
            inputType='email'
            label='E-Mail'
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <Input
            inputType='phone'
            label='Phone number'
            onChange={formik.handleChange}
            value={formik.values.phone}
          />

          <Input
            inputType='text'
            label='Type Your Message'
            onChange={formik.handleChange}
            value={formik.values.text}
            className={classes.textInput}
          />

          <button className={classes.formButton} type='submit'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
