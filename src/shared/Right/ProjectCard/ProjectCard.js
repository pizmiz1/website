import { useEffect, useState } from "react";
import Chip from "../../Chip/Chip";
import "./ProjectCard.css";

const ProjectCardComponent = ({
  isActive,
  noneActive,
  headerText,
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

  const click = () => {
    switch (headerText) {
      case "Linedo": {
        window.open("https://zietzmn.wixsite.com/linedo/", "_blank");
        break;
      }
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

  return (
    <div
      className="container"
      style={{
        backgroundColor: isActive ? "rgba(229, 231, 235, .05)" : "",
        opacity: noneActive || isActive ? 1 : 0.5,
      }}
      onClick={click}
    >
      <div className="top-container">
        <h1
          style={{
            color: isActive ? "#17cf97" : "",
            transition: "0.1s ease-in-out",
            margin: 0,
            flex: 0.3,
          }}
        >
          {headerText}
        </h1>
        <div className="description">
          <p>Description coming soon...</p>
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
