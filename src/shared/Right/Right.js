import { useState } from "react";
import RightNavbar from "./RightNav/RightNavbar";
import "./RightStyles.css";
import ProjectCardComponent from "./ProjectCard/ProjectCard";

const Right = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentHover, setCurrentHover] = useState(0);

  const noneHovered = () => {
    setCurrentHover(0);
  };

  return (
    <div
      style={{
        flex: 0.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <RightNavbar
        tabClick={(passedIndex) => {
          setActiveTab(passedIndex);
        }}
      />

      {activeTab === 0 ? (
        <div className="about-half-subtext">
          <p style={{ fontSize: "20px", marginTop: "15px" }}>
            I'm a developer who has a passion for creating applications that
            blend functionality and user experience. Ever since I was a child,
            art and math have been two passions of mine. Balancing creativity
            with practicality has driven me to do some great things. Application
            building was a natural fit for this balance. Being able to use both
            skills to craft applications that make users happy is my dream.
          </p>
          <p style={{ fontSize: "20px", marginTop: "15px" }}>
            Currently, I'm a Software Engineer II at{" "}
            <a href="https://www.medpace.com/" target="_blank" className="link">
              Medpace
            </a>
            , leading a team of four developers to build healthcare software.
            Our software helps Medpace conduct clinical trials in all forms. I
            have hands in all parts of the development process, from
            architecting and designing the entire application to small bug
            fixing.
          </p>
          <p style={{ fontSize: "20px", marginTop: "15px" }}>
            In the past, I've had the opportunity to develop software across a
            variety of settings. I developed an award winning{" "}
            <a
              href="https://zietzmn.wixsite.com/linedo/"
              target="_blank"
              className="link"
            >
              mobile application
            </a>{" "}
            from scratch, implementing the full stack. I've also had various
            small personal projects from website building to small python apps.
          </p>
          <p style={{ fontSize: "20px", marginTop: "15px" }}>
            I like to exercise, ski and hike in my free time. I also love most
            sports, soccer and <p className="football">football</p> being some
            of my favorites.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "15px",
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
              imageName={"linedo.png"}
              chipTexts={[
                { text: "Javascript", type: "default" },
                { text: "React Native", type: "default" },
                { text: "Node", type: "default" },
                { text: "Express", type: "default" },
                { text: "MongoDB", type: "storage" },
                { text: "Heroku", type: "hosting" },
                { text: "Expo", type: "hosting" },
              ]}
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
              imageName={"mainPoint.png"}
              chipTexts={[
                { text: "Javascript", type: "default" },
                { text: "React Native", type: "default" },
                { text: "Async Storage", type: "storage" },
                { text: "Firebase", type: "hosting" },
                { text: "Expo", type: "hosting" },
              ]}
            />
          </div>
          <div
            className="project-card-container"
            onMouseEnter={() => {
              setCurrentHover(3);
            }}
            onMouseLeave={noneHovered}
          >
            <ProjectCardComponent
              isActive={currentHover === 3}
              noneActive={currentHover === 0}
              headerText={"Portfolio"}
              imageName={"favicon.png"}
              chipTexts={[
                { text: "Javascript", type: "default" },
                { text: "React", type: "default" },
                { text: "Firebase", type: "hosting" },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Right;
