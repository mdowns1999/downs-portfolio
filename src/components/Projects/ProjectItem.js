import classes from "./ProjectItem.module.css";
import SkillsList from "./SkillsList";
const ProjectItem = (props) => {
  return (
    <li className={classes.item}>
      <img src={require("../../assets/images/blank.png")} alt="Product Item" />
      <div className={classes.overlay}>
        <div className={classes.content}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <SkillsList skills={props.skills} id={props.id} />
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
