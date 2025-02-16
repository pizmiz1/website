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
          padding: "15px",
        }}
      >
        <Outlet />
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <p
            style={{
              paddingRight: "20px",
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
