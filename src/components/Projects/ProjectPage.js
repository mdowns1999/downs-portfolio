import ProjectItem from "./ProjectItem";
import classes from './ProjectPage.module.css'

const ProjectPage = () => {
  console.log("PAGE");
  let PROJECTS = [
    {
      id: 1,
      name: "Project 1",
      description: "A project with a lot of words of this project.",
      skills: ["React", "JavaScript", "C ++","SCSS"],
    },
    {
      id: 2,
      name: "Project 2",
      description: "A project with a lot of words of this project.",
      skills: ["Angular", "JavaScript", "C ++"],
    },
    {
      id: 3,
      name: "Project 3",
      description: "A project with a lot of words of this project.",
      skills: ["Bootstrap", "JavaScript", "C ++"],
    },
  ];

  return (
    <div>
      <ul className={classes.projectList}>
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={index}
            id={project.id}
            name={project.name}
            description={project.description}
            skills={project.skills}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
