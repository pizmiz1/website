import { useState } from "react";
import ProjectCardComponent from "./ProjectCard/ProjectCard";
import "./ProjectsStyles.css";

const ProjectsScreen = () => {
  const [currentHover, setCurrentHover] = useState(0);

  const noneHovered = () => {
    setCurrentHover(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="project-card-container"
          onMouseEnter={() => {
            setCurrentHover(1);
          }}
          onMouseLeave={noneHovered}
        >
          <ProjectCardComponent
            isActive={currentHover === 1}
            noneActive={currentHover === 0}
            headerText={"Linedo"}
          />
        </div>
        <div
          className="project-card-container"
          onMouseEnter={() => {
            setCurrentHover(2);
          }}
          onMouseLeave={noneHovered}
        >
          <ProjectCardComponent
            isActive={currentHover === 2}
            noneActive={currentHover === 0}
            headerText={"MainPoint"}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        <p
          style={{
            paddingRight: "20px",
          }}
        >
          Created by Ethan Britton
        </p>
      </div>
    </div>
  );
};

export default ProjectsScreen;
