"use client";
import React, { useEffect, useState } from "react";
import "@/Styles/home.css";
import "@/Styles/Animate.css";

import Typewriter from "typewriter-effect";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Homepage = ({ onHome }) => {
  const [backgound, setBackgound] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (backgound) {
        setBackgound(false);
      } else {
        setBackgound(true);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <section className="home-page" id="home">
      <ul>
        <li className={`backgound-image-1 ${backgound ? "show" : "hide"} li`}>
          <div className={`text-inner ${backgound ? "AnimateDU" : "animate"}`}>
            <div className="row ">
              <h1>I'm a</h1>
              <h2>
                <Typewriter
                  options={{
                    strings: [" Developer", "UI/UX Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <p>
                100% nodejs web page Made by{" "}
                <span style={{ color: "blue" }}>Shivam Singh</span>
              </p>
              <div className={`cv_btn ${backgound ? "AnimateLR" : "animate"}`}>
                <a href="">
                  View Portfolio <BusinessCenterIcon fontSize="small" />
                </a>
              </div>
            </div>
          </div>
        </li>

        <li className={`backgound-image-2 ${backgound ? "hide" : "show"} li`}>
          <div className={`text-inner ${backgound ? "animate" : "AnimateDU"}`}>
            <div ref={onHome} className="row">
              <h1>Hi!</h1>
              <h2>I'm Shivam</h2>
              <p>
                100% nodejs web page Made by{" "}
                <span style={{ color: "blue" }}>Shivam Singh</span>
              </p>
              <div className={`cv_btn ${backgound ? "animate" : "AnimateLR"}`}>
                <a href="">
                  Download CV <FileDownloadIcon fontSize="small" />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Homepage;
