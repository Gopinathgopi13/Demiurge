import Navbar from "../../../Navbar/Navbar";
import CommunityMainPage from "./CommunityMainPage";
import CommunitySecondContainer from "./CommunitySecondContainer";
import CommunityThirdContainer from "./CommunityThirdContainer";
import CommunityFourthContainer from "./CommunityFourthContainer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import CTA from "./CTA";
import FAQ from "./FAQ";

function Community() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0  bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[url('https://img.freepik.com/premium-photo/businesspeople-working-meeting-working-studio-with-city-city-light-background-skyline_987366-7078.jpg?w=1380')] bg-cover bg-center">
        <CommunityMainPage />
      </div>
      <div className="my-20">
        <CommunitySecondContainer />
      </div>
      <div className="bg-[#0c2d57] text-white">
        <CommunityThirdContainer />
      </div>
      <div>
        <FAQ />
      </div>
      <div className="bg-[#0c2d57]">
        <CTA />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default Community;
