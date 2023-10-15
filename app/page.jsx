"use client";
import "../styles/Page.css";
import Homepage from "@/components/Home";
import About from "@/components/About";
import Nav from "@/components/Nav";
import { useState } from "react";
import Skills from "@/components/Skills";

import { motion as m,  } from "framer-motion";
import Education from "@/components/Education";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(" ");

  return (
    <m.main
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Nav navigate={currentPage} setNavigate={setCurrentPage} />
      <div className="Container">
        <Homepage setCurrentPage={setCurrentPage} />

        <About setCurrentPage={setCurrentPage} />

        <Skills setCurrentPage={setCurrentPage} />

        <Education setCurrentPage={setCurrentPage}/>
      </div>
    </m.main>
  );
}
