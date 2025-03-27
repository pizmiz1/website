import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import "./LeftStyles.css";

const Left = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="left-half">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div className="inner-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "10vw",
            }}
          >
            <img
              style={{ borderRadius: 1000 }}
              src={require(`./../../assets/headshot.jpg`)}
              height={screenWidth < 850 ? 200 : 250}
              width={screenWidth < 850 ? 180 : 230}
            />
            <p
              style={{
                marginTop: "10px",
                marginLeft: "2px",
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
                marginLeft: "2px",
              }}
            >
              Software Engineer
            </p>
            <p
              style={{ fontSize: "20px", marginTop: "15px", marginLeft: "2px" }}
            >
              Designing and building software is my playground.
            </p>
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "flex-end",
                gap: "20px",
                marginTop: "15px",
              }}
            >
              <a
                href="https://github.com/pizmiz1"
                target="_blank"
                className="icon"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-britton-164657160/"
                target="_blank"
                className="icon"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="mailto:ebritton12321@gmail.com"
                target="_blank"
                className="icon"
              >
                <LuMail size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
