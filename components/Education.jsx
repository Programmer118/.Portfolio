'use client'
import "@/Styles/education.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Education = ({setCurrentPage}) => {
  const { ref: getPage, inView: onPage } = useInView();
  const [collapseOne, setCollapseOne] = useState(true)
  const [collapseTwo, setCollapseTwo] = useState(false)
  const [collapseThree, setCollapseThree] = useState(false)



  const handleCollaps = ()=>{
    setCollapseOne(!collapseOne)
  }

  useEffect(() => {
  if(onPage){
    setCurrentPage("#education")
  }
    
  }, )
  

  return (
    <div className="education-page" id="education">
      <div className="narrow-content">
        <div className="row">
          <div className="heading-contant col-md-offset-3 col-md-6">
            <span className="heading-meta">Education</span>
            <h3 className="heading">Education</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="collapse-panel">
              <div className="panel-group">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#collapsedOne" onClick={()=>setCollapseOne(!collapseOne)} className={`${collapseOne ? "":"collapsed"}`}>
                        BACHELOR DEGREE OF COMPUTER SCIENCE
                      </a>
                    </h4>
                  </div>
                  <div id="collapsedOne" className={`panel-collapsed  ${collapseOne ? "":"collapse"}`}>
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
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#collapsedTwo" onClick={()=>setCollapseTwo(!collapseTwo)} className={`${collapseTwo ? "":"collapsed"}`}>
                      HIGH SCHOOL SECONDARY EDUCATION
                      </a>
                    </h4>
                  </div>
                  <div id="collapsedTwo" className={`panel-collapsed  ${collapseTwo ? "":"collapse"}`}>
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
                <div  className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a ref={getPage} onClick={()=>setCollapseThree(!collapseThree)} href="#collapsedThree" className={`${collapseThree ? "":"collapsed"}`}>
                      Secondary School EDUCATION
                      </a>
                    </h4>
                  </div>
                  <div id="collapsedThree" className={`panel-collapsed  ${collapseThree ? "":"collapse"}`}>
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
