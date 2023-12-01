import { useState } from "react";
import RadioButton from "../UI/RadioButton";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectPage.module.css";
let json = require("../../assets/project-data/projects.json");

const ProjectPage = () => {
  const [selectedValue, setSelectedValue] = useState("All");
  let filteredProjects = [];
  let SKILLS = [
    { id: "s1", name: "All" },
    { id: "s2", name: "Web" },
    { id: "s3", name: "Design" },
    { id: "s4", name: "Other" },
  ];

  let PROJECTS = json;

  if (selectedValue !== "All") {
    filteredProjects = PROJECTS.filter((project) => {
      return project.type === selectedValue;
    });
  } else {
    filteredProjects = PROJECTS;
  }

  //Make Sure we are at the top of the page!
  window.scrollTo(0, 0);

  return (
    <div>
      <h1 className="banner">Projects</h1>
      <ul className={classes.projectFilterBar}>
        {SKILLS.map((skill) => (
          <RadioButton
            key={skill.id}
            id={skill.id}
            name={"Project Filter List"}
            value={skill.name}
            label={skill.name}
            setSelectedValue={setSelectedValue}
          />
        ))}
      </ul>
      <ul className={classes.projectList + " " + classes.fadeIn}>
        {filteredProjects.map((project, index) => (
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
