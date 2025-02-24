import Navbar from "./nav/Navbar";
import { Outlet } from "react-router-dom";

import "./styles.css";

const App = () => {
  return (
    <div
      style={{
        background: "#212121",
        height: "100vh",
        overflowY: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Outlet />
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            backgroundColor: "#17cf97",
          }}
        >
          <p
            style={{
              paddingRight: "20px",
              color: "white",
            }}
          >
            Created by Ethan Britton
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
