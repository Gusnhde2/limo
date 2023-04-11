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
      alert(values.name + " " + values.lastname + " " + values.email);
    },
  });

  return (
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
  );
};

export default Form;