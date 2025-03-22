import MainScreen from "./screens/Main";
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
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <MainScreen />
      </div>
    </div>
  );
};

export default App;
