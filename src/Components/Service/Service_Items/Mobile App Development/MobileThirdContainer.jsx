import React from "react";

import fintech from '../../../../assets/Mobile App Development/fintech.svg'
import eCommerce from '../../../../assets/Mobile App Development/marketplace.svg'
import lifestyle from '../../../../assets/Mobile App Development/needs.svg'
import gaming from '../../../../assets/Mobile App Development/game.svg'
import education from '../../../../assets/Mobile App Development/education.svg'
import health from '../../../../assets/Mobile App Development/healthcare.svg'
import social from '../../../../assets/Mobile App Development/social-media.svg'

function MobileThirdContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-5 mx-auto px-4">
      <div className="md:text-4xl text-3xl font-semibold primaryColor py-5">
        Industries We Serve
      </div>
      <div className="lg:w-[80%] lg:text-xl text-white">
        A strategic social media approach is your key to connecting with the
        right people and achieving lasting success.
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10">
        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5 bg-white">
          <div className="space-y-5 ">
            <img src={fintech} className="h-20 mx-auto" />
            <div className="text-xl text-blue-500 font-semibold">
              FinTech & Cryptocurrency
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold ">We specialize in:</p>
            <ul className="list-disc px-5 clolo">
              <li>Blockchain ecosystems</li>
              <li>Cryptocurrency exchange platforms</li>
              <li>Cryptocurrency mobile wallets</li>
              <li>Decentralized app (dApp) development</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5 bg-white">
          <div className="space-y-5 ">
            <img src={eCommerce} className="h-20 mx-auto" />
            <div className="text-xl text-blue-500 font-semibold">Retail & E-Commerce</div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold ">We deliver:</p>
            <ul className="list-disc px-5 clolo">
              <li>Full-scale e-commerce solutions</li>
              <li>AI-driven shopping list platforms</li>
              <li>Smart retail apps powered by NFC technology</li>
              <li>Customer experience enhancement solutions</li>
              <li>IoT solutions for device and sensor management</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5 bg-white">
          <div className="space-y-5 ">
            <img src={lifestyle} className="h-20 mx-auto" />
            <div className="text-xl text-blue-500 font-semibold">Lifestyle & Travel</div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold ">We develop:</p>
            <ul className="list-disc px-5 clolo">
              <li>360° virtual reality (VR) tour platforms</li>
              <li>Dedicated loyalty apps</li>
              <li>Travel planning and scheduling tools</li>
              <li>AI-powered recommendations services</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5 bg-white">
          <div className="space-y-5 ">
            <img src={gaming} className="h-20 mx-auto" />
            <div className="text-xl text-blue-500 font-semibold">Gaming & Entertainment</div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold ">We build:</p>
            <ul className="list-disc px-5 clolo">
              <li>Unity, Cocos2D-x, and Unreal Engine games</li>
              <li>Smart contract-powered strategy games</li>
              <li>Role-playing games (RPG)</li>
              <li>Social gaming platforms</li>
              <li>Betting platforms</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5 bg-white">
          <div className="space-y-5 ">
            <img src={education} className="h-20 mx-auto" />
            <div className="text-xl text-blue-500 font-semibold">Learning & Education</div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold ">We create:</p>
            <ul className="list-disc px-5 clolo">
              <li>Audiovisual conferencing solitons</li>
              <li>Performance tracking and evaluation apps</li>
              <li>Collaboration and feedback exchange</li>
              <li>Interactive tutorials</li>
              <li>Content management systems (CMS)</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5 bg-white">
          <div className="space-y-5 ">
            <img src={health} className="h-20 mx-auto" />
            <div className="text-xl text-blue-500 font-semibold">Healthcare & Medicine</div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold ">We produce:</p>
            <ul className="list-disc px-5 clolo">
              <li>mHealth (mobile healthcare) apps</li>
              <li>Telemedicine solutions</li>
              <li>Supply chain tracking platforms</li>
              <li>Remote patient monitoring apps</li>
              <li>EHR (electronic health record) platforms</li>
              <li>AI-enabled diagnostic imaging solutions</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center px-5 gap-5 shadow-lg rounded-lg py-5 bg-white">
          <div className="space-y-5 ">
            <img src={social} className="h-20 mx-auto" />
            <div className="text-xl text-blue-500 font-semibold text-center">
              Social Networking & Telecommunications
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold ">We launch:</p>
            <ul className="list-disc px-5 clolo">
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
