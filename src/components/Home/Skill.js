import { useEffect, useState } from "react";
import classes from "./Skill.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
//https://www.npmjs.com/package/@ramonak/react-progress-bar
const Skill = (props) => {
  const [progressNum, setProgressNum] = useState(0);

  useEffect(() => {
    if (props.inView) {
      setProgressNum(props.completed);
    }
  }, [props.inView, props.completed]);
  return (
    <div className={classes.skill}>
      <p>{props.name}</p>
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

export default Skill;
