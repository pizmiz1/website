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
      <nav className="nav-container">
        <ul id="navbar">
          <li>
            <NavLink style={{ fontFamily: "Inter" }} to="/" viewTransition>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ fontFamily: "Inter" }}
              to="/projects"
              viewTransition
            >
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
