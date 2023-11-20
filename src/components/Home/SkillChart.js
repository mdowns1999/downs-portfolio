import { useInView } from "react-intersection-observer";
import Skill from "./Skill";
import classes from "./SkillChart.module.css";
//https://www.npmjs.com/package/@ramonak/react-progress-bar
const SkillChart = () => {
    const { ref, inView} = useInView();


  return (
    <div className={classes.skills}>
    <Skill name="mySql" completed={60} inView={inView}/>
    <Skill name="mySql" completed={40} inView={inView}/>
    <Skill name="mySql" completed={80} inView={inView}/>
    <div ref={ref}>
<h2>{`Header inside viewport ${inView}.`}</h2>
</div>
    </div>


  );
};

export default SkillChart;
