import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Industries from "./Components/Industries/Industries";
import Work from "./Components/Work/Work";
import SocialMedia from "./Components/Service/Service_Items/Social_Media/SocialMedia";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socialMedia" element={<SocialMedia />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
