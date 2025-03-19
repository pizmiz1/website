import { useEffect, useState } from "react";
import Chip from "../../../shared/Chip";

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: isActive ? "rgba(229, 231, 235, .05)" : "",
        borderRadius: "20px",
        transition: "0.1s ease-in-out",
        padding: "20px",
        opacity: noneActive || isActive ? 1 : 0.5,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            color: isActive ? "#17cf97" : "",
            transition: "0.1s ease-in-out",
            margin: 0,
            marginRight: "40px",
          }}
        >
          {headerText}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {chipTexts.map((curr, index) => {
            return <Chip key={index} text={curr.text} type={curr.type} />;
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <img
          src={require(`./../../../assets/${imageName}`)}
          height={screenWidth < 850 ? 120 : 140}
          width={screenWidth < 850 ? 120 : 140}
        />
        <p>Description... :)</p>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
