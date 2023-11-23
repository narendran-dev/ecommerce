import './form-input.style.scss'

const FormInput = ({ lable, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {lable && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={otherProps.name}
        >
          {lable}
        </label>
      )}
    </div>
  );
};

export default FormInput;
