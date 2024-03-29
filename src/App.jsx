import React, { useState } from "react";
import ReactGA from "react-ga";
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
// import PaidSocial from "./Components/Service/Service_Items/Paid_Social/PaidSocial";
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
import ScrollToTop from "./ScrollToTop";
import ErrorPAge from "./Components/ErrorPAge";
import { IoIosMail, IoIosCall } from "react-icons/io";
import TermsAndCondition from "./Components/Common/TermsAndCondition";
import PrivacyPolicy from "./Components/Common/PrivacyPolicy";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 0);
  }

  return (
    !loading && (
      <>
        <BrowserRouter>
          <ScrollToTop>
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
              {/* <Route path="/service/paidsocial" element={<PaidSocial />} /> */}
              <Route path="/service/pr" element={<PR />} />
              <Route
                path="/service/video-marketing"
                element={<VideoMarketing />}
              />
              <Route path="/service/brand" element={<Branding />} />
              <Route path="/service/community" element={<Community />} />
              <Route path="/service/web" element={<Web />} />
              <Route path="/service/cgi" element={<CGI />} />
              <Route path="/service/mobile" element={<MobileApp />} />
              <Route path="/service/blockchain" element={<Blockchain />} />
              <Route path="/service/lead" element={<LeadGeneration />} />
              <Route path="/service/arvr" element={<ARVR />} />
              <Route path="/terms" element={<TermsAndCondition />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />

              <Route path="*" element={<ErrorPAge />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </>
    )
  );
}

export default App;
