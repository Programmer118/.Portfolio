import "@/Styles/skill.css";
import { useInView } from "react-intersection-observer";
import "@/Styles/Animate.css";

const Skills = ({ onSkills }) => {
  const { ref: Animate, inView: onAnimate } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="skills-page" id="skills">
      <div className="Narrow-content">
        <div className="row">
          <div ref={onSkills} className="Heading">
            <span
              ref={Animate}
              className={`Heading-meta ${onAnimate ? "AnimateXR" : "animate"}`}
            >
              My Specialty
            </span>
            <h2
              className={`col-heading ${onAnimate ? "AnimateLR" : "animate"}`}
            >
              My Skills
            </h2>
          </div>
        </div>
        <div className="row">
          <div className={`col-md-12 ${onAnimate ? "AnimateLR" : "animate"}`}>
            <p>
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>
          </div>
          <div class={`progress-wrap ${onAnimate ? "AnimateLR1S" : "animate"}`}>
            <h3>Python</h3>
            <div class="progress">
              <div
                class="progress-bar color-1"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              >
                <span>75%</span>
              </div>
            </div>
          </div>
          <div class={`progress-wrap ${onAnimate ? "AnimateRL1S" : "animate"}`}>
            <h3>C</h3>
            <div class="progress">
              <div
                class="progress-bar color-2"
                role="progressbar"
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "35%" }}
              >
                <span>35%</span>
              </div>
            </div>
          </div>
          <div class={`progress-wrap ${onAnimate ? "AnimateLR2S" : "animate"}`}>
            <h3>Next Js</h3>
            <div class="progress">
              <div
                class="progress-bar color-3"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "55%" }}
              >
                <span>55%</span>
              </div>
            </div>
          </div>
          <div class={`progress-wrap ${onAnimate ? "AnimateRL2S" : "animate"}`}>
            <h3>CSS 3</h3>
            <div class="progress">
              <div
                class="progress-bar color-4"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "60%" }}
              >
                <span>60%</span>
              </div>
            </div>
          </div>
          <div class={`progress-wrap ${onAnimate ? "AnimateLR3S" : "animate"}`}>
            <h3>HTML 5</h3>
            <div class="progress">
              <div
                class="progress-bar color-5"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              >
                <span>90%</span>
              </div>
            </div>
          </div>
          <div class={`progress-wrap ${onAnimate ? "AnimateRL3S" : "animate"}`}>
            <h3>JavaScript</h3>
            <div class="progress">
              <div
                class="progress-bar color-6"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "20%" }}
              >
                <span>20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
