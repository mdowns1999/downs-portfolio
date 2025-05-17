import { useParams } from "react-router-dom";
import classes from "./ProjectDetailPage.module.css";
import data from "../../assets/project-data/projects.json";
import SkillsList from "./SkillsList";
import Button from "../UI/Button";
import getImage from "../../helper/getImage";
import Paragraph from "../UI/Paragraph";
import Image from "../UI/Image";

const ProjectDetailPage = () => {
  const params = useParams();
  let project = data.find((project) => project.id === +params.id);

  let btns = project.links.map((link) => (
    <Button key={link.name} to={link.link} external>
      {link.name}
    </Button>
  ));

  let image = getImage(project.name);

  //Make Sure we are at the top of the page!
  window.scrollTo(0, 0);

  return (
    <div className={classes.project}>
      <Image src={image} alt="Product Item" />
      <div className={classes.content}>
        <h1>{project.name}</h1>
        <Paragraph>{project.description}</Paragraph>
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
