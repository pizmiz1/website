import "./HomeStyles.css";
import Wave from "react-wavify";

const HomeScreen = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <div className="upper-container">
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
        <div
          style={{
            flex: 0.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div className="right-half-subtext">
            <p style={{ fontSize: "20px", marginTop: "15px" }}>
              I'm a developer who has a passion for creating applications that
              blend functionality and user experience. Ever since I was a child,
              art and math have been two passions of mine. Balancing creativity
              with practicality has driven me to do some great things.
              Application building was a natural fit for this balance. Being
              able to use both skills to craft applications that make users
              happy is my dream.
            </p>
            <p style={{ fontSize: "20px", marginTop: "15px" }}>
              Currently, I'm a Software Engineer II at{" "}
              <a
                href="https://www.medpace.com/"
                target="_blank"
                className="link"
              >
                Medpace
              </a>
              , leading a team of four developers to build healthcare software.
              Our software helps Medpace conduct clinical trials in all forms. I
              have hands in all parts of the development process, from
              architecting and designing the entire application to small bug
              fixing.
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
              from scratch, implementing the full stack. I've also had various
              small personal projects from website building to small python
              apps.
            </p>
            <p style={{ fontSize: "20px", marginTop: "15px" }}>
              I like to exercise, ski and hike in my free time. I also love most
              sports, soccer and <p className="football">football</p> being some
              of my favorites.
            </p>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default HomeScreen;
