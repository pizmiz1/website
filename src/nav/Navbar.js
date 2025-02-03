import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          background: "#1b2430",
          padding: "20px 80px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.06)",
        }}
      >
        <ul id="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
