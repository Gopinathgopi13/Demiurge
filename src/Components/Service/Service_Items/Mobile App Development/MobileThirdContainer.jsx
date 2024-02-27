import React from "react";
import SEOImage from "../../../../assets/SVG/google_icon.svg";

function MobileThirdContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-5 mx-auto px-4">
      <div className="md:text-6xl text-3xl font-medium py-5">
        Industries We Serve
      </div>
      <div className="lg:w-[80%] lg:text-xl text-justify">
        A strategic social media approach is your key to connecting with the
        right people and achieving lasting success.
      </div>
      <div className="grid lg:grid-cols-3 gap-5 my-10">
        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">
              FinTech & Cryptocurrency
            </div>
          </div>
          <div className="">
            <p>We specialize in:</p>
            <ul className="list-disc">
              <li>Blockchain ecosystems</li>
              <li>Cryptocurrency exchange platforms</li>
              <li>Cryptocurrency mobile wallets</li>
              <li>Decentralized app (dApp) development</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">Retail & E-Commerce</div>
          </div>
          <div className="">
            <p>We deliver:</p>
            <ul className="list-disc">
              <li>Full-scale e-commerce solutions</li>
              <li>AI-driven shopping list platforms</li>
              <li>Smart retail apps powered by NFC technology</li>
              <li>Customer experience enhancement solutions</li>
              <li>IoT solutions for device and sensor management</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">Lifestyle & Travel</div>
          </div>
          <div className="">
            <p>We develop:</p>
            <ul className="list-disc">
              <li>360° virtual reality (VR) tour platforms</li>
              <li>Dedicated loyalty apps</li>
              <li>Travel planning and scheduling tools</li>
              <li>AI-powered recommendations services</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">Gaming & Entertainment</div>
          </div>
          <div className="">
            <p>We build:</p>
            <ul className="list-disc">
              <li>Unity, Cocos2D-x, and Unreal Engine games</li>
              <li>Smart contract-powered strategy games</li>
              <li>Role-playing games (RPG)</li>
              <li>Social gaming platforms</li>
              <li>Betting platforms</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">
              Logistics & Distribution
            </div>
          </div>
          <div className="">
            <p>We design:</p>
            <ul className="list-disc">
              <li>Supply chain management systems</li>
              <li>Cargo and fleet management solutions</li>
              <li>Document management tools</li>
              <li>GPS routing and navigation platforms</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">E-Learning</div>
          </div>
          <div className="">
            <p>We create:</p>
            <ul className="list-disc">
              <li>Audiovisual conferencing solitons</li>
              <li>Performance tracking and evaluation apps</li>
              <li>Collaboration and feedback exchange</li>
              <li>Interactive tutorials</li>
              <li>Content management systems (CMS)</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">Healthcare & Medicine</div>
          </div>
          <div className="">
            <p>We produce:</p>
            <ul className="list-disc">
              <li>mHealth (mobile healthcare) apps</li>
              <li>Telemedicine solutions</li>
              <li>Supply chain tracking platforms</li>
              <li>Remote patient monitoring apps</li>
              <li>EHR (electronic health record) platforms</li>
              <li>AI-enabled diagnostic imaging solutions</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">
              Social Networking & Telecommunications
            </div>
          </div>
          <div className="">
            <p>We launch:</p>
            <ul className="list-disc">
              <li>Digital contract and data storage platforms</li>
              <li>Social media influencer apps</li>
              <li>Image sharing platforms</li>
              <li>Real-time communication (RTC) solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileThirdContainer;
