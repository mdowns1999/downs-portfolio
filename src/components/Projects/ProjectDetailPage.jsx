import { useParams } from "react-router-dom";
import classes from "./ProjectDetailPage.module.css";
import data from "../../assets/project-data/projects.json";
import SkillsList from "./SkillsList";
import Button from "../UI/Button";
import getImage from "../../helper/getImage";

const ProjectDetailPage = () => {
  const params = useParams();
  let project = data.find((project) => project.id === +params.id);

  let btns = project.links.map((link, index) => (
    <a key={index} href={link.link} rel="noreferrer" target="_blank">
    <Button>
        {link.name}
    </Button>
    </a>
  ));

  let image = getImage(project.name);

  //Make Sure we are at the top of the page!
  window.scrollTo(0, 0);

  return (
    <div className={classes.project}>
      <img src={image} alt="Product Item" />

      <div className={classes.content}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className={classes.skills}>
          <h2>Skills:</h2>
          <SkillsList skills={project.skills} id={project.id} />
        </div>

        <div className={classes.linkBox}>{btns}</div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
