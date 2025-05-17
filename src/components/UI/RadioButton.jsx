import PropTypes from "prop-types";
import classes from "./RadioButton.module.css";

const RadioButton = ({ setSelectedValue, name, value, id, label }) => {
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={classes.radio}>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={handleRadioChange}
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

RadioButton.propTypes = {
  setSelectedValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default RadioButton;
