import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Industries from "./Components/Industries/Industries";
import Work from "./Components/Work/Work";
import SocialMedia from "./Components/Service/Service_Items/Social_Media/SocialMedia";
import About from "./Components/About/About";
import Careers from "./Components/Careers/Careers";
import SEO from "./Components/Service/Service_Items/SEO/SEO";
import PPC from "./Components/Service/Service_Items/Paid_Media/PPC";
import PaidSocial from "./Components/Service/Service_Items/Paid_Social/PaidSocial";
import PR from "./Components/Service/Service_Items/PR/PR";
import VideoMarketing from "./Components/Service/Service_Items/Video Marketing/VideoMarketing";
import Branding from "./Components/Service/Service_Items/Branding/Branding";
import Community from "./Components/Service/Service_Items/Community Management/Community";
import Web from "./Components/Service/Service_Items/Web Development/Web";
import CGI from "./Components/Service/Service_Items/CGI/CGI";
import MobileApp from "./Components/Service/Service_Items/Mobile App Development/MobileApp";
import Blockchain from "./Components/Service/Service_Items/Blockchain Development/Blockchain";
import LeadGeneration from "./Components/Service/Service_Items/Lead Generation/LeadGeneration";
import ARVR from "./Components/Service/Service_Items/ARVR/ARVR";

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
          <Route path="/careers" element={<Careers />} />
          <Route path="/socialMedia" element={<SocialMedia />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/ppc" element={<PPC />} />
          <Route path="/paidsocial" element={<PaidSocial />} />
          <Route path="/pr" element={<PR />} />
          <Route path="/video-marketing" element={<VideoMarketing />} />
          <Route path="/brand" element={<Branding />} /> 
          <Route path="/community" element={<Community />} /> 
          <Route path="/web" element={<Web />} /> 
          <Route path="/cgi" element={<CGI />} /> 
          <Route path="/mobile" element={<MobileApp />} /> 
          <Route path="/blockchain" element={<Blockchain />} /> 
          <Route path="/lead" element={<LeadGeneration />} /> 
          <Route path="/arvr" element={<ARVR />} /> 

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
