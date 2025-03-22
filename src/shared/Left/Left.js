import "./LeftStyles.css";

const Left = () => {
  return (
    <div className="left-half">
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          marginRight: "10vw",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Ethan Britton
        </p>
        <p
          style={{
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "1vh",
          }}
        >
          Software Engineer
        </p>
        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          Designing and building software is my playground.
        </p>
      </div>
    </div>
  );
};

export default Left;
