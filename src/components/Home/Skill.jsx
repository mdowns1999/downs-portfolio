import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import classes from "./Skill.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

// Define the Skill component
const Skill = ({ completed, inView, name }) => {
  const [progressNum, setProgressNum] = useState(0);

  useEffect(() => {
    if (inView) {
      setProgressNum(completed);
    }
  }, [inView, completed]);

  return (
    <div className={classes.skill}>
      <p>{name}</p>
      <div className={classes.progressBar}>
        <ProgressBar
          labelColor="black"
          bgColor="#FFD500"
          height="22"
          completed={progressNum}
        />
      </div>
    </div>
  );
};

// Define PropTypes for the Skill component
Skill.propTypes = {
  completed: PropTypes.number.isRequired, // The percentage of completion
  inView: PropTypes.bool.isRequired,     // Whether the skill is in view
  name: PropTypes.string.isRequired      // The name of the skill
};

export default Skill;