import { useInView } from "react-intersection-observer";
import Skill from "./Skill";
import classes from "./SkillChart.module.css";
import Paragraph from "../UI/Paragraph";
//https://www.npmjs.com/package/@ramonak/react-progress-bar
const SkillChart = () => {
  const SKILLS = [
    { name: "Javascript", completed: 70 },
    { name: "HTML", completed: 70 },
    { name: "CSS", completed: 70 },
    { name: "React", completed: 60 },
    { name: "C++", completed: 50 },
    { name: "MYSQL", completed: 60 },
    { name: "Node/Express", completed: 50 },
    { name: "Python", completed: 40 },
    { name: "C#", completed: 40 },
  ];
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.25,
  });

  return (
    <div ref={ref} className={classes.skills}>
      <Paragraph size="small">A chart showing my level of knowledge for each language</Paragraph>
      {SKILLS.map((skill, index) => (
        <Skill
          key={skill.name}
          name={skill.name}
          completed={skill.completed}
          inView={inView}
        />
      ))}
    </div>
  );
};

export default SkillChart;
