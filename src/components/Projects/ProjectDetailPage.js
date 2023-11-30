import { useParams } from "react-router-dom";
import classes from './ProjectDetailPage.module.css';
import data from '../../assets/project-data/projects.json';
import SkillsList from "./SkillsList";
import Button from "../UI/Button";

const ProjectDetailPage = () => {
  const params = useParams();
  let project = data.find(project => project.id === +params.id);
  
    return (
     <div className={classes.project}>
      <img
          src={require("../../assets/images/blank.png")}
          alt="Product Item"
        />

        <div className={classes.content}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div className={classes.skills}>
            <h2>Skills:</h2>
          <SkillsList skills={project.skills} id={project.id} />
          </div>

          <div className={classes.linkBox}>
            <Button>Github Repo</Button>
            <Button>Live Site</Button>
          </div>
        </div>
     </div>
    );
  };
  
  export default ProjectDetailPage ;
  