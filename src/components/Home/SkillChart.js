import { useInView } from "react-intersection-observer";
import Skill from "./Skill";
import classes from "./SkillChart.module.css";
//https://www.npmjs.com/package/@ramonak/react-progress-bar
const SkillChart = () => {
  const SKILLS = [
    { name: "Javascript", completed: 70 },
    { name: "HTML", completed: 70 },
    { name: "CSS", completed: 70 },
    { name: "C++", completed: 60 },
    {name: "MYSQL", completed: 60},
    { name: "Python", completed: 50 },
    { name: "C#", completed: 40 },
    {name: "PHP", completed: 40},
    
  ];
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={classes.skills}>
      {SKILLS.map((skill, index)=> (
        <Skill key={index} name={skill.name} completed={skill.completed} inView={inView} />
      ))}
      

    </div>
  );
};

export default SkillChart;