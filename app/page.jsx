"use client";
import "@/Styles/Page.css";
import Homepage from "@/components/Home";
import About from "@/components/About";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import Skills from "@/components/Skills";

import { motion as m } from "framer-motion";
import Education from "@/components/Education";
import { useInView } from "react-intersection-observer";
import Contact from "@/components/Contact";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(" ");

  const { ref: home, inView: inHome } = useInView();
  const { ref: about, inView: inAbout } = useInView();
  const { ref: skills, inView: inSkills } = useInView();
  const { ref: education, inView: inEducation } = useInView();
  const { ref: contact, inView: inContact } = useInView();

  useEffect(() => {
    if (inHome) {
      setCurrentPage("#");
    } else if (inAbout) {
      setCurrentPage("#about");
    } else if (inSkills) {
      setCurrentPage("#skills");
    } else if (inEducation) {
      setCurrentPage("#education");
    } else if (inContact) {
      setCurrentPage("#contact");
    }
  });

  return (
    <m.main
      className="main"
      style={{ backgroundColor: "white" }}
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
        <Homepage onHome={home} />

        <About onAbout={about} />

        <Skills onSkills={skills} />

        <Education Oneducation={education} />

        <Contact onContact={contact} />
      </div>
    </m.main>
  );
}
