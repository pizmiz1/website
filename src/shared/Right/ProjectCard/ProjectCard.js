import { useEffect, useState } from "react";
import Chip from "../../Chip/Chip";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import "./ProjectCard.css";

const ProjectCardComponent = ({
  isActive,
  noneActive,
  headerText,
  description,
  imageName,
  chipTexts,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const githubClick = () => {
    switch (headerText) {
      case "MainPoint": {
        window.open("https://github.com/pizmiz1/MainPoint", "_blank");
        break;
      }
      case "Portfolio": {
        window.open("https://github.com/pizmiz1/website", "_blank");
        break;
      }
    }
  };

  const websiteClick = () => {
    switch (headerText) {
      case "Linedo": {
        window.open("https://zietzmn.wixsite.com/linedo/", "_blank");
        break;
      }
      case "Portfolio": {
        window.open("https://ethan-britton.com/", "_blank");
        break;
      }
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: isActive ? "rgba(229, 231, 235, .05)" : "",
        opacity: noneActive || isActive ? 1 : 0.5,
      }}
    >
      <div className="top-container">
        <div style={{ display: "flex", flexDirection: "column", flex: 0.3 }}>
          <h1
            style={{
              color: isActive ? "#17cf97" : "",
              transition: "0.1s ease-in-out",
              margin: 0,
            }}
          >
            {headerText}
          </h1>
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "row",
              gap: "4px",
            }}
          >
            {headerText !== "Linedo" ? (
              <FaGithub
                size={20}
                onClick={githubClick}
                style={{ cursor: "pointer" }}
                className="icon2"
              />
            ) : (
              ""
            )}
            {headerText !== "MainPoint" ? (
              <CiGlobe
                size={20}
                onClick={websiteClick}
                style={{ cursor: "pointer" }}
                className="icon2"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="bottom-container">
        <div style={{ flex: 0.3 }}>
          <img
            src={require(`./../../../assets/${imageName}`)}
            height={screenWidth < 850 ? 80 : 100}
            width={screenWidth < 850 ? 80 : 100}
          />
        </div>
        <div className="chips">
          {chipTexts.map((curr, index) => {
            return <Chip key={index} text={curr.text} type={curr.type} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
