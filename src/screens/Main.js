import Footer from "../shared/Footer/Footer";
import Left from "../shared/Left/Left";
import Right from "../shared/Right/Right";
import "./MainStyles.css";

const MainScreen = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <div className="upper-container">
        <Left />
        <Right />
      </div>

      <Footer />
    </div>
  );
};

export default MainScreen;
