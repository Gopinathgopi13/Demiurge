import React from "react";
import Navbar from "../Navbar/Navbar";
import ServiceContainer from "./Service_Container/ServiceContainer";

function Home() {
  return (
    <div className="w-full">
      <div  className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <Navbar />
        {/* Main Page */}
        <div className="h-[100vh] w-full"></div>
      </div>
      {/* Services */}
      <div className="py-[140px] w-full h-[1750]">
        <ServiceContainer></ServiceContainer>
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
}

export default Home;
