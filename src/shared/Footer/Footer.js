import Wave from "react-wavify";

const Footer = () => {
  return (
    <>
      <div style={{ height: "50%" }} />
      <div
        style={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Wave
          fill="#17cf97"
          paused={false}
          options={{ height: 20, amplitude: 40, speed: 0.3, points: 2 }}
        />
        <div
          style={{ flexGrow: 1, backgroundColor: "#17cf97", width: "100%" }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginTop: "auto",
          backgroundColor: "#17cf97",
        }}
      >
        <p
          style={{
            paddingRight: "20px",
            color: "white",
            marginBottom: "5px",
          }}
        >
          Created by Ethan Britton
        </p>
      </div>
    </>
  );
};

export default Footer;
