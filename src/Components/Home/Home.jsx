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
import backgroundVideo from "../../assets/Background-Video.mp4"
function Home() {
  return (
    <div className="w-full">
      <motion.div
        className="lg:sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeIn" }}
      >
        <Navbar />
      </motion.div>
      <div className="w-full">
        <video autoPlay loop muted className="absolute -z-30 w-full h-[100vh] top-0 left-0 blur-sm border-none object-cover">
          <source src={backgroundVideo}/>
        </video>
        <MainPage />
      </div>
      {/* Services */}
      <div className="w-full pt-20">
        <ServiceContainer></ServiceContainer>
      </div>
      <div className="w-full">
        <CallToTeam />
      </div>
      <div className="w-full">
        <IndustriesComponent />
      </div>
      <div>
        <FQA />
      </div>
      <div className="w-full">
        <Clients />
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
