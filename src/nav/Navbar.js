import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
