import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
  const resumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1RLb7hwPYYZhnpOgP_MYuaheu34BwYHSC/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          background: "#191919",
          padding: "10px 80px",
          WebkitBoxShadow: "0 5px 30px rgb(0,0,0)",
          marginBottom: "30px",
        }}
      >
        <ul id="navbar">
          <li>
            <NavLink style={{ fontFamily: "Inter" }} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={{ fontFamily: "Inter" }} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <button
              style={{ fontFamily: "Inter", cursor: "pointer" }}
              onClick={resumeClick}
            >
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
