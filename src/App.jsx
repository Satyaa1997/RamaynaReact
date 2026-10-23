import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import WhyChoose from "./Components/WhyChoose";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import FloatingCallButton from "./Components/FloatingCallButton";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsConditions from "./Components/TermsConditions";
import Disclaimer from "./Components/Disclaimer";
import ReraDetails from "./Components/ReraDetails";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whychoose" element={<WhyChoose />} />
        <Route path="/why-choose" element={<WhyChoose />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
        <Route path="/terms" element={< TermsConditions/>}/>
        <Route path="/desclam" element={< Disclaimer/>}/>
        <Route path="/reradetil" element={<ReraDetails/>} />
      </Routes>

      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default App;
