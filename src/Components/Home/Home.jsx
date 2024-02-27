import Navbar from "../Navbar/Navbar";
import ServiceContainer from "./Service_Container/ServiceContainer";
import CallToTeam from "./CallToTeam/CallToTeam";
import Clients from "./Clients/Clients";
import ContactForm from "./ContactForm/ContactForm";
import MainPage from "./Main_Page/MainPage";
import Footer from "../Footer/Footer";
import FQA from "../FQA's/FQA";
import IndustriesComponent from "./Industries_Component/IndustriesComponent";
import { motion } from "framer-motion";
import industriesBG from "../../assets/industriesBG.jpg";
// import backgroundVideo from "../../assets/Background-Video.mp4";
function Home() {
  return (
    <div className="w-full">
      <div
        className="bg-[#0c2d57] lg:sticky top-0 z-50 shadow-md"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Navbar />
      </div>
      <div className="w-full bg-[#0C2D57]">
        <MainPage />
      </div>
      {/* Services */}
      <div className="w-full my-20">
        <ServiceContainer></ServiceContainer>
      </div>
      <div className="w-full">
        <CallToTeam />
      </div>
      <div className="w-full my-20">
        <IndustriesComponent />
      </div>
      <div>
        <FQA />
      </div>
      <div className="w-full my-20">
        <Clients />
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
