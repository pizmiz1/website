import { useEffect, useState } from "react";

const ProjectCardComponent = ({ isActive, noneActive, headerText }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageName = headerText === "Linedo" ? "linedo.png" : "mainPoint.png";

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
            opacity: noneActive || isActive ? 1 : 0.5,
            color: isActive ? "#17cf97" : "",
            transition: "0.1s ease-in-out",
            margin: 0,
          }}
        >
          {headerText}
        </h1>
        <p>ComingSoon</p>
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
          height={screenWidth < 850 ? 90 : 150}
          width={screenWidth < 850 ? 90 : 150}
        />
        <p>ComingSoon</p>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
