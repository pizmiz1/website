import "./ChipStyles.css";

const Chip = ({ text, type }) => {
  var color;
  var rgbaColor;
  switch (type) {
    case "storage": {
      color = "#03f0fc";
      rgbaColor = "rgba(3, 240, 252, .1)";
      break;
    }
    case "hosting": {
      color = "#e703fc";
      rgbaColor = "rgba(231, 3, 252, .1)";
      break;
    }
    default: {
      color = "#17cf97";
      rgbaColor = "rgba(23, 207, 151, .1)";
      break;
    }
  }

  return (
    <div
      style={{
        backgroundColor: rgbaColor,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        borderRadius: "50px",
      }}
    >
      <p style={{ color: color }} className="chip-text">
        {text}
      </p>
    </div>
  );
};

export default Chip;
