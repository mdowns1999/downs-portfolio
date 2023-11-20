import { useEffect, useState } from "react";
import classes from "./Skill.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { inView } from "framer-motion";
//https://www.npmjs.com/package/@ramonak/react-progress-bar
const Skill = (props) => {
    const [progressNum, setProgressNum] = useState(0);

    useEffect(()=> {
        console.log(props.inView)
        if(props.inView){
            setProgressNum(props.completed);
          }
      },[props.inView,props.completed])
  return (
    <>
     <p>{props.name}</p>
      <div className={classes.progressBar}>
      <ProgressBar completed={progressNum}/>
      </div>
    </>

   
  );
};

export default Skill;
