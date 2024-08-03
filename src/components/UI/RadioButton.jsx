import PropTypes from "prop-types"; // Import PropTypes
import classes from "./RadioButton.module.css";

// Define the RadioButton component
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

// Define PropTypes for the RadioButton component
RadioButton.propTypes = {
  setSelectedValue: PropTypes.func.isRequired, // setSelectedValue should be a function and is required
  name: PropTypes.string.isRequired,            // name should be a string and is required
  value: PropTypes.string.isRequired,           // value should be a string and is required
  id: PropTypes.string.isRequired,              // id should be a string and is required
  label: PropTypes.string.isRequired            // label should be a string and is required
};

export default RadioButton;