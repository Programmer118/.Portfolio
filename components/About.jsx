import "@/Styles/about.css";
import "@/Styles/Animate.css";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

import { useInView } from "react-intersection-observer";

const About = ({ onAbout }) => {
  const { ref: Bulb, inView: inBulb } = useInView({
    triggerOnce: true,
  });
  const { ref: glob, inView: inglob } = useInView({
    triggerOnce: true,
  });
  const { ref: mob, inView: inMob } = useInView({
    triggerOnce: true,
  });
  const { ref: data, inView: inData } = useInView({
    triggerOnce: true,
  });
  const { ref: Ref, inView } = useInView({
    threshold: 1,
    rootMargin: "10px",
    triggerOnce: true,
  });

  return (
    <section className="about-page" id="about">
      <div className="narrow-contant">
        <div className="row">
          <div className="col-md">
            <div
              className={` row fadeInLeft ${
                inView ? "AnimateXR" : "animate"
              } row-bottom-padded-sm`}
              data-animate-effact="fadeInLeft"
            >
              <div className="col-md">
                <div className="about-desc">
                  <span ref={Ref} className="heading-meta">
                    About me
                  </span>
                  <h2 ref={onAbout} className="heading">
                    Who am I?
                  </h2>

                  <p>
                    <strong>Hi I'm Shivam Singh </strong>I am a graduate student
                    with a strong passion for technology. I have completed
                    training in Next.js, CSS3, HTML5, Python, and basic C
                    programming. I am a quick learner and able to adapt to new
                    challenges.
                  </p>

                  <p ref={Ref}>
                    I am interested in a career in the tech industry, and I am
                    open to learning more about different career paths, such as
                    software engineering, web development, data science, machine
                    learning engineering, AI engineering, research science,
                    technical writing, software architecture, DevOps
                    engineering, IT security analysis, mobile app development,
                    UX design, and UI design. I am excited about the
                    possibilities that lie ahead, and I am committed to working
                    hard to achieve my goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row icons">
            <div
              className={`bulb-icon  ${
                inBulb ? "AnimateLR" : "animate"
              } icon-padding mtp-25px shadow margin-right margin-left`}
            >
              <div className={`icon1 icon-padding `}>
                <span ref={Bulb} id="icon1">
                  <LightbulbIcon fontSize="large" />
                </span>
                <h3>Graphic Design</h3>
              </div>
            </div>
            <div
              className={`glob-icon mtp-25px shadow icon-padding margin-right ${
                inglob ? "AnimateLR" : "animate"
              }`}
            >
              <div className={`icon2 `}>
                <span ref={glob} id="icon2">
                  <PublicTwoToneIcon fontSize="large" />
                </span>
                <h3>Web Design</h3>
              </div>
            </div>
            <div
              className={`data-icon mtp-25px icon-padding shadow margin-right ${
                inData ? "AnimateRL" : "animate"
              }`}
            >
              <div className={`icon3 `}>
                <span ref={data} id="icon3">
                  <StorageOutlinedIcon fontSize="large" />
                </span>
                <h3>Software</h3>
              </div>
            </div>
            <div
              className={`mobile-icon mtp-25px icon-padding shadow margin-right margin-left  ${
                inMob ? "AnimateRL" : "animate"
              }`}
            >
              <div className={`icon4 `}>
                <span id="icon4">
                  <SmartphoneIcon fontSize="large" />
                </span>
                <h3 ref={mob}>Application</h3>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </section>
  );
};

export default About;
