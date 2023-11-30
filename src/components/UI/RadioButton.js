import classes from "./RadioButton.module.css";

const RadioButton = (props) => {
  const handleRadioChange = (event) => {
    props.setSelectedValue(event.target.value);
  };

  return (
    <div className={classes.radio}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={handleRadioChange}
        required
      ></input>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButton;
