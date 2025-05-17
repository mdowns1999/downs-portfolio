import PropTypes from "prop-types"; 
import classes from "./SkillsList.module.css";

const SkillsList = ({ skills, id }) => {
  return (
    <ul className={classes.list}>
      {skills.map((item) => (
        <li key={id + item} className={classes.skill}>
          {item}
        </li>
      ))}
    </ul>
  );
};

// Define PropTypes for the SkillsList component
SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired, // skills should be an array of strings and is required
  id: PropTypes.string.isRequired, // id should be a string and is required
};

export default SkillsList;