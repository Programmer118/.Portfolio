"use client";
import React, { useEffect, useRef, useState } from "react";
import "../Styles/home.css";
import { useInView } from "react-intersection-observer";


const Homepage = ({ setCurrentPage }) => {
  const { ref: getPage, inView: onPage } = useInView();
  const backgrounds = ["/image/img_bg_1.jpg", "/image/img_bg_2.jpg"];
  const headings = ["Hi!", "Heading 2"];
  const [index, setIndex] = useState(0);
 

  useEffect(() => {
    if(onPage){
      setCurrentPage("#")
    }
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

 
       return()=>{
         clearInterval(interval);
       }
   
  });

  return (
    <section ref={getPage}  className="home-page" id="home">
      <div className="">f</div>
      <div   className="img">
     
      </div>
    </section>
  );
};

export default Homepage;
