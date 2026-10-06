
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import WhyChoose from "./Components/WhyChoose";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import FloatingCallButton from "./Components/FloatingCallButton";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/whychoose" element={<WhyChoose/>} />
        <Route path="/gallery" element={<Gallery/>} />
         <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default App;

