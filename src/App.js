import Navbar from "./nav/Navbar";
import { Outlet } from "react-router-dom";

import "./styles.css";

const App = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #effaff 0%, #d9e7ff 100%)",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default App;
