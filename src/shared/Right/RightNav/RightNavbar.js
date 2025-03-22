import { useState } from "react";
import "./RightNavbarStyles.css";

const RightNavbar = ({ tabClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const buttonClick = (index) => {
    if (index === 2) {
      window.open(
        "https://drive.google.com/file/d/1RLb7hwPYYZhnpOgP_MYuaheu34BwYHSC/view?usp=sharing",
        "_blank"
      );
    } else {
      setActiveTab(index);
      tabClick(index);
    }
  };

  return (
    <div id="navbar">
      <button
        style={
          activeTab === 0
            ? {
                color: "#17cf97",
              }
            : {}
        }
        onClick={() => buttonClick(0)}
      >
        About
      </button>
      <div className="separator" />
      <button
        style={
          activeTab === 1
            ? {
                color: "#17cf97",
              }
            : {}
        }
        onClick={() => buttonClick(1)}
      >
        Projects
      </button>
      {/* <div className="separator" />
      <button onClick={() => buttonClick(2)}>Resume</button> */}
    </div>
  );
};

export default RightNavbar;
