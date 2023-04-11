const Input = (props) => {
  return (
    <>
      <input
        placeholder={props.label}
        id={props.inputType}
        name={props.inputType}
        type={props.inputType}
        onChange={props.onChange}
        value={props.value}
        className={props.className}
      />
    </>
  );
};

export default Input;
