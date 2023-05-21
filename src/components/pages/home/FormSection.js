import Form from "./Form";
import classes from "./FormSection.module.css";

const FormSection = () => {
  return (
    <div className={classes.formSection}>
      <div className={classes.imageContainer}>
        <img
          decoding='async'
          src='https://themexriver.com/wp/roonix/wp-content/uploads/2022/05/14.png'
          alt='Awesome Image'
        />
      </div>
      <Form />
    </div>
  );
};

export default FormSection;
