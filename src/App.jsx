import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
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
import Portfolio from "./Components/Portfolio/Portfolio";


function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }

  return (
    !loading && (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />

          {/* Service */}
          <Route path="/service" element={<Service />} />

          <Route path="/service/socialMedia" element={<SocialMedia />} />
          <Route path="/service/seo" element={<SEO />} />
          <Route path="/service/ppc" element={<PPC />} />
          <Route path="/service/paidsocial" element={<PaidSocial />} />
          <Route path="/service/pr" element={<PR />} />
          <Route path="/service/video-marketing" element={<VideoMarketing />} />
          <Route path="/service/brand" element={<Branding />} />
          <Route path="/service/community" element={<Community />} />
          <Route path="/service/web" element={<Web />} />
          <Route path="/service/cgi" element={<CGI />} />
          <Route path="/service/mobile" element={<MobileApp />} />
          <Route path="/service/blockchain" element={<Blockchain />} />
          <Route path="/service/lead" element={<LeadGeneration />} />
          <Route path="/service/arvr" element={<ARVR />} />

          {/* Industries */}
          {/* <Route path="/industries" element={<Industries />} />
          <Route path="/industries/fintech" element={<FintechMarketing />} />
          <Route path="/industries/crypto" element={<CryptoMarketing />} />
          <Route path="/industries/software" element={<SoftwareMarketing />} />
          <Route path="/industries/startup" element={<StartupMarketing />} />
          <Route path="/industries/smallBusiness" element={<SmallBusiness />} />
          <Route
            path="/industries/ecommerce"
            element={<ECommerceMarketing />}
          />
          <Route path="/industries/gaming" element={<GamingMarketing />} />
          <Route path="/industries/esport" element={<EsportsMarketing />} />
          <Route
            path="/industries/real-Estate"
            element={<RealEstateMarketing />}
          />
          <Route path="/industries/tour" element={<Tourism />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/b2b" element={<B2bMarketing />} />
          <Route path="/industries/education" element={<Education />} /> */}
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
