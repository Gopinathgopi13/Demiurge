import React from "react";
// import IndustriesCard from "./IndustriesCard";
import "./Industries.css";
// import industriesData from "../../../Utilities/IndustriesData";
import industries_Card_Image from "../../../assets/Industies/Fintech.jpg";
import crypto from "../../../assets/Industies/Crypto.jpg";
import Saas from "../../../assets/Industies/SaaS.jpg";
import Startup from "../../../assets/Industies/Startup.jpg";
import SME from "../../../assets/Industies/SME..jpg";
import Ecommerce from "../../../assets/Industies/eCommerce.jpg";
import Gaming from "../../../assets/Industies/Gaming.jpg";
import Education from "../../../assets/Industies/Education.jpg";
import Realestate from "../../../assets/Industies/Realestate.jpg";
import B2B from "../../../assets/Industies/B2B.jpeg";
import Tourism from "../../../assets/Industies/Tourism.jpg";
import Healthcare from "../../../assets/Industies/HealthCare.webp";
function IndustriesComponent() {
  return (
    <div className="sm:flex sm:flex-col sm:justify-center mx-auto">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="lg:text-4xl text-3xl font-bold my-5 primaryColor">
          Our Industries
        </div>
        <div className="lg:text-lg lg:w-[60%]">
          Our creative digital marketing firm has helped a diverse range of
          businesses and organizations achieve their advertising objectives.
          With extensive experience working in numerous industries, we have the
          insights and expertise to help you discover your true potential.
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      <div class="md:grid md:grid-rows-5 md:grid-cols-4 gap-5 space-y-2 px-5 overflow-hidden z-10">
        {/* 1) Fintech */}
        <div
          id="item-0"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className={`md:relative md:bottom-[-100px] md:h-[300px] h-[200px] text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden group relative grid-item`}
          style={{
            backgroundImage: `url(${industries_Card_Image})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Fintech</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* Crypto */}
        <div
          id="item-1"
          className={`md:relative md:bottom-[-100px]  text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden group grid-item `}
          style={{
            backgroundImage: `url(${crypto})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Crypto</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* Saas */}
        <div
          id="item-2"
          className={`md:h-[300px] h-[200px] text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden group grid-item`}
          style={{
            backgroundImage: `url(${Saas})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Saas</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* <div id="item-1">&nbsp;</div> */}
        {/* <div id="item-2">&nbsp;</div> */}
        {/* Startup */}
        <div
          id="item-3"
          className={`md:relative md:bottom-[-100px] text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden group  grid-item `}
          style={{
            backgroundImage: `url(${Startup})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Startup</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* Small Bussiness */}
        <div
          id="item-4"
          className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${SME})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">
              Small Bussiness
            </div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* eCommerce */}
        <div
          id="item-5"
          className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${Ecommerce})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">eCommerce</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* Gaming */}
        <div
          id="item-6"
          className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${Gaming})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Gaming</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* B2B */}
        <div
          id="item-7"
          className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${B2B})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">B2B</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* B2C */}
        {/* <div
          id="item-8"
          className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${industries_Card_Image})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
        >

          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">B2C</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
        {/* </div> */}
        {/* </div>  */}

        {/* Realestate */}
        <div
          id="item-8"
          className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${Realestate})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Real Estate</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* Education */}
        <div
          id="item-9"
          className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${Education})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Education</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* Healthcare */}
        <div
          id="item-10"
          className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${Healthcare})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Healthcare</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>

        {/* Tourism */}
        <div
          id="item-11"
          className={`md:relative text-base rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden transform transition duration-700 hover:scale-110 hover:z-50 group relative `}
          style={{
            backgroundImage: `url(${Tourism})`,
            backgroundPosition: `center center`,
            backgroundSize: "cover",
          }}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {/* <img
            src={industries_Card_Image}
            className="w-full h-full blur-0  group-hover:blur-[2px]"
            alt=""
          /> */}
          <div className="absolute bottom-1 px-3 text-white group-hover:drop-shadow-lg">
            <div className="font-bold text-xl primaryColor">Tourism</div>
            {/* <div>
              Boost your fintech standing with our tailored strategies. They
              amplify visibility, instill trust, and drive growth for a
              competitive edge.
            </div> */}
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------- */}
    </div>
  );
}

export default IndustriesComponent;
