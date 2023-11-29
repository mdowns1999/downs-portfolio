import { useState } from "react";
import RadioButton from "../UI/RadioButton";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectPage.module.css";
let json = require("../../assets/project-data/projects.json")

const ProjectPage = () => {
  const [selectedValue, setSelectedValue] = useState("All");
  let filteredProjects = []
  let SKILLS = [
    { id: "s1", name: "All" },
    { id: "s2", name: "Web" },
    { id: "s3", name: "Design" },
    { id: "s4", name: "Other" },

  ];

  let PROJECTS = json;
  // let PROJECTS = [
  //   {
  //     id: 1,
  //     name: "Project 1",
  //     description: "A project with a lot of words of this project.",
  //     skills: ["React", "JavaScript", "C ++", "SCSS"],
  //     type: "Web"
  //   },
  //   {
  //     id: 2,
  //     name: "Project 2",
  //     description: "A project with a lot of words of this project.",
  //     skills: ["Angular", "JavaScript", "C ++"],
  //     type: "Design"
  //   },
  //   {
  //     id: 3,
  //     name: "Project 3",
  //     description: "A project with a lot of words of this project.",
  //     skills: ["Bootstrap", "JavaScript", "C ++"],
  //     type: "Other"
  //   },
  // ];


  console.log(json)
  if(selectedValue !== "All"){
    filteredProjects = PROJECTS.filter((project) => {
      return project.type === selectedValue;
    })
  }else{
    filteredProjects = PROJECTS;
  }

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
      <ul className={classes.projectList}>
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


// import { useState } from "react";
// import CheckBoxList from "../UI/CheckBoxList";
// import ProjectItem from "./ProjectItem";
// import classes from "./ProjectPage.module.css";

// const ProjectPage = () => {
//   const [filterOptions, setFilterOptions] = useState(['All']);

//   let SKILLS = [
//     { id: "s1", name: "All" },
//     { id: "s2", name: "Web Projects" },
//     { id: "s3", name: "Design Projects" },
//     { id: "s4", name: "Other" },

//   ];
//   let PROJECTS = [
//     {
//       id: 1,
//       name: "Project 1",
//       description: "A project with a lot of words of this project.",
//       skills: ["React", "JavaScript", "C ++", "SCSS"],
//       type: "Web"
//     },
//     {
//       id: 2,
//       name: "Project 2",
//       description: "A project with a lot of words of this project.",
//       skills: ["Angular", "JavaScript", "C ++"],
//       type: "Web"
//     },
//     {
//       id: 3,
//       name: "Project 3",
//       description: "A project with a lot of words of this project.",
//       skills: ["Bootstrap", "JavaScript", "C ++"],
//       type: "Web"
//     },
//     {
//       id: 4,
//       name: "Project 4",
//       description: "A project with a lot of words of this project.",
//       skills: ["Bootstrap", "JavaScript", "C ++"],
//       type: "Design"
//     },
//     {
//       id: 5,
//       name: "Project 5",
//       description: "A project with a lot of words of this project.",
//       skills: ["PHP"],
//       type: "Other"
//     },
//   ];

//   // let filteredProjects = PROJECTS.filter((project) => {
//   //   return project.type === 
//   // })

//   return (
//     <div>
//       <h1 className="banner">Projects</h1>
//       <div className={classes.projectFilterBar}>
//         <CheckBoxList
//               list={SKILLS}
//               setSelectedList={setFilterOptions}/>
//       </div>
//       <ul className={classes.projectList}>
//         {PROJECTS.map((project, index) => (
//           <ProjectItem
//             key={index}
//             id={project.id}
//             name={project.name}
//             description={project.description}
//             skills={project.skills}
//             index={index}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectPage;
