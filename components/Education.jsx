"use client";
import "@/Styles/education.css";
import "@/Styles/Animate.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Education = ({ Oneducation }) => {
  const { ref: Animate, inView: onAnimate } = useInView({
    triggerOnce: true,
  });
  const [collapseOne, setCollapseOne] = useState(true);
  const [collapseTwo, setCollapseTwo] = useState(false);
  const [collapseThree, setCollapseThree] = useState(false);

  const CollapseOne = () => {
    setCollapseOne(!collapseOne);
    setCollapseTwo(false);
    setCollapseThree(false);
  };
  const CollapseTwo = () => {
    setCollapseOne(false);
    setCollapseTwo(!collapseTwo);
    setCollapseThree(false);
  };
  const CollapseThree = () => {
    setCollapseOne(false);
    setCollapseTwo(false);
    setCollapseThree(!collapseThree);
  };
  return (
    <div className="education-page" id="education">
      <div className="narrow-content">
        <div className="row">
          <div className="heading-contant col-md-offset-3 col-md-6">
            <span
              className={`heading-meta ${onAnimate ? "AnimateLR" : "animate"}`}
            >
              Education
            </span>
            <h3 className={`heading ${onAnimate ? "AnimateLR" : "animate"}`}>
              Education
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="collapse-panel">
              <div className="panel-group">
                <div
                  ref={Animate}
                  className={`panel panel-default ${
                    onAnimate ? "AnimateLR1S" : "animate"
                  }`}
                >
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        onClick={CollapseOne}
                        className={`${collapseOne ? "" : "collapsed"}`}
                      >
                        BACHELOR DEGREE OF COMPUTER SCIENCE
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapsedOne"
                    className={`panel-collapsed  ${
                      collapseOne ? "AnimateOcp" : "collapse"
                    }`}
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`panel panel-default ${
                    onAnimate ? "AnimateLR1S" : "animate"
                  }`}
                >
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        ref={Oneducation}
                        onClick={CollapseTwo}
                        className={`${collapseTwo ? "" : "collapsed"}`}
                      >
                        HIGH SCHOOL SECONDARY EDUCATION
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapsedTwo"
                    className={`panel-collapsed  ${
                      collapseTwo ? "AnimateOcp" : "collapse"
                    }`}
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`panel panel-default ${
                    onAnimate ? "AnimateLR1S" : "animate"
                  }`}
                >
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        onClick={CollapseThree}
                        className={`${collapseThree ? "" : "collapsed"}`}
                      >
                        Secondary School EDUCATION
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapsedThree"
                    className={`panel-collapsed  ${
                      collapseThree ? "AnimateOcp" : "collapse"
                    }`}
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
