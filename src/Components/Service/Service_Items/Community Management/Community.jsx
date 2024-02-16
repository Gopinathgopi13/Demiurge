import Navbar from "../../../Navbar/Navbar";
import CommunityMainPage from "./CommunityMainPage";
import CommunitySecondContainer from "./CommunitySecondContainer";
import CommunityThirdContainer from "./CommunityThirdContainer";
import CommunityFourthContainer from "./CommunityFourthContainer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";

function Community() {
  return (
    <div className="w-full">
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <CommunityMainPage />
      </div>
      <div>
        <CommunitySecondContainer />
      </div>
      <div>
        <CommunityThirdContainer />
      </div>
      <div>
        <CommunityFourthContainer />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Community;
