import PropTypes from "prop-types";
import getImage from "../../helper/getImage";
import Image from "../UI/Image";
import classes from "./ProjectItem.module.css";
import SkillsList from "./SkillsList";
import { Link } from "react-router-dom";
const ProjectItem = (props) => {

  let image = getImage(props.name);
  return (
    <li className={classes.item}>
      <Link to={`/projects/${props.id}`} className={classes.itemLink}>
        <Image
          src={image}
          alt={`${props.name} Project Link`}
        />
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h2>{props.name}</h2>
            <SkillsList skills={props.skills} id={props.id} />
          </div>
        </div>
      </Link>
    </li>
  );
};

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default ProjectItem;
