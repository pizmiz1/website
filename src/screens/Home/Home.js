import "./HomeStyles.css";

const HomeScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 0.3 }} />
      <div
        style={{
          flex: 0.15,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          overflowWrap: "anywhere",
          paddingRight: "30px",
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
            marginTop: "10px",
          }}
        >
          Software Engineer
        </p>
        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          Designing and building software is my playground.
        </p>
      </div>
      <div
        style={{
          flex: 0.25,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          overflowWrap: "anywhere",
          paddingLeft: "30px",
        }}
      >
        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          I'm a developer who has a passion for creating applications that blend
          functionality and user experience. Ever since I was a child, art and
          math have been two passions of mine. Balancing creativity with
          practicality has driven me to do some great things. Application
          building was a natural fit for this balance. Being able to use both
          skills to craft applications that make users happy is my dream.
        </p>
        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          Currently, I'm a Software Engineer II at{" "}
          <a href="https://www.medpace.com/" target="_blank" className="link">
            Medpace
          </a>
          , leading a team of four developers to build healthcare software. Our
          software helps Medpace conduct clinical trials in all forms. I have
          hands in all parts of the development process, from architecting and
          designing the entire application to small bug fixing.
        </p>
        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          In the past, I've had the opportunity to develop software across a
          variety of settings. I developed an award winning{" "}
          <a
            href="https://zietzmn.wixsite.com/linedo/ "
            target="_blank"
            className="link"
          >
            mobile application
          </a>{" "}
          from scratch, implementing the full stack. I've also had various small
          personal projects from website building to small python apps.
        </p>
        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          I like to exercise, ski and hike in my free time. I also love most
          sports, soccer and <p className="football">football</p> being some of
          my favorites.
        </p>
      </div>
      <div style={{ flex: 0.3 }} />
    </div>
  );
};

export default HomeScreen;
