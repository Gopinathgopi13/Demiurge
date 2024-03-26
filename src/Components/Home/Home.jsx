// import Navbar from "../Navbar/Navbar";
// import ServiceContainer from "./Service_Container/ServiceContainer";
// import CallToTeam from "./CallToTeam/CallToTeam";
// import Clients from "./Clients/Clients";
// import ContactForm from "./ContactForm/ContactForm";
// import MainPage from "./Main_Page/MainPage";
// import Footer from "../Footer/Footer";
// // import FQA from "../FQA's/FQA";
// import IndustriesComponent from "./Industries_Component/IndustriesComponent";
// import { motion } from "framer-motion";
// import industriesBG from "../../assets/industriesBG.jpg";
// import FAQ from "../FAQ's/FQA";
// import { Link } from "react-router-dom";
// import FloatingSocialMedia from "../Common/FloatingSocialMedia";
// import CookieBar from "../Common/CookieBar";
// import { useEffect, useState } from "react";
// // import backgroundVideo from "../../assets/Background-Video.mp4";
// function Home() {
//   let [show, setShow] = useState("hidden");

//   const TOP_OFFSET = 200;
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= TOP_OFFSET) {
//         setShow("flex");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div className="w-full">
//       <div
//         className="bg-[#0c2d57] sticky top-0 z-50 shadow-md"
//         // data-aos="fade-down"
//         // data-aos-duration="1000"
//         // data-aos-once="true"
//       >
//         <Navbar />
//       </div>
//       <div className="w-full bg-[#0C2D57]">
//         <MainPage />
//       </div>
//       {/* Services */}
//       <div className="w-full my-20">
//         <ServiceContainer></ServiceContainer>
//       </div>
//       <div className="w-full">
//         <CallToTeam />
//       </div>
//       <div className="w-full my-10 ">
//         <IndustriesComponent />
//       </div>
//       <div>
//         <FAQ />
//       </div>
//       <div className="w-full my-10">
//         <Clients />
//       </div>
//       <div className="w-full">
//         <ContactForm />
//       </div>
//       <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
//         <Footer />
//       </div>
//       <div>
//         <FloatingSocialMedia />
//       </div>
//       {/* <div>
//         <CookieBar/>
//       </div> */}
//       <div
//         className={`bg-[#e48f45] items-center gap-20 justify-center md:px-10 py-2 md:${show} h-[10vh] hidden fixed bottom-0 right-0 left-0 z-50 transition ease-in duration-[5000]`}
//       >
//         <div className="text-center">
//           <div className="text-2xl text-[#0c2d57] font-extrabold uppercase">
//             Kickstart your journey
//           </div>
//           <div className="">success with Demiurge today!</div>
//         </div>
//         <div>
//           <button className="p-2 border-2 border-[#0c2d57] text-[#0c2d57] text-md font-semibold">
//             Get a Quote
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import Navbar from "../Navbar/Navbar";
import ServiceContainer from "./Service_Container/ServiceContainer";
import CallToTeam from "./CallToTeam/CallToTeam";
import Clients from "./Clients/Clients";
import ContactForm from "./ContactForm/ContactForm";
import MainPage from "./Main_Page/MainPage";
import Footer from "../Footer/Footer";
import IndustriesComponent from "./Industries_Component/IndustriesComponent";
import FAQ from "../FAQ's/FQA";
import { useEffect, useState } from "react";
import FloatingSocialMedia from "../Common/FloatingSocialMedia";
import CookieBar from "../Common/CookieBar";
import { motion } from "framer-motion";
import industriesBG from "../../assets/industriesBG.jpg";
import { Link } from "react-router-dom";

function Home() {
  let [show, setShow] = useState("hidden");

  const TOP_OFFSET = 600;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShow("block");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="bg-[#0c2d57] sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>
      <div className="w-full bg-[#0C2D57]">
        <MainPage />
      </div>
      <div className="w-full my-20">
        <ServiceContainer />
      </div>
      <div className="w-full">
        <CallToTeam />
      </div>
      <div className="w-full my-10">
        <IndustriesComponent />
      </div>
      <div>
        <FAQ />
      </div>
      <div className="w-full my-10">
        <Clients />
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
      <div>
        <FloatingSocialMedia />
      </div>
      <div
        className={`bg-[#e48f45] items-center gap-20 justify-center md:px-10 py-2 md:${show} h-[9vh] hidden fixed bottom-0 right-0 left-0 z-50 transition ease-in duration-[5000ms]`}
      >
        <div className="text-center">
          <div className="text-2xl text-[#0c2d57] font-extrabold uppercase">
            Kickstart your journey
          </div>
          <div className="">success with Demiurge today!</div>
        </div>
        <div>
          <button className="p-2 border-2 border-[#0c2d57] text-[#0c2d57] text-md font-semibold">
            Get a Quote
          </button>
        </div>
      </div>
      {/* <CookieBar /> */}
    </div>
  );
}

export default Home;
