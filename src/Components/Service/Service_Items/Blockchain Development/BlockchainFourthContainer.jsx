import React from "react";
import SEOImage from "../../../../assets/SVG/google_icon.svg";
import Docs from '../../../../assets/Blockchain/DiscoveryAndDocs.webp'
import UI from '../../../../assets/Blockchain/UI_UX.webp'
import UnitTesting from '../../../../assets/Blockchain/unitTesting.webp'
import QA from '../../../../assets/Blockchain/QA.webp'
import Deployement from '../../../../assets/Blockchain/deployment.webp'
import Support from '../../../../assets/Blockchain/SupportAndMaintenance.webp'
function BlockchainFourthContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-4">
      <div className="md:text-4xl text-3xl font-semibold my-5 py-5 text-center primaryColor">
        Our Blockchain Software Development Process
      </div>
      <div className="grid lg:grid-cols-3 gap-10 my-10 w-[80%] mx-auto">
        <div className="flex flex-col px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="space-y-3">
            <img src={Docs} className="h-10" />
            <div className="text-xl text-blue-500">
              Development & Integration
            </div>
          </div>
          <div className="text-balance">
            This phase encompasses exhaustive market research, meticulous
            competitor analysis, and a comprehensive examination of our smart
            contract languages—Truffle, Hardhat, Brownie, and Solidity Coverage.
            Through this thorough groundwork, we effectively communicate your
            unique brand awareness within Blockchain trends.
          </div>
        </div>

        <div className="flex flex-col px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="space-y-3">
            <img src={UI} className="h-10" />
            <div className="text-xl text-blue-500">
              UI/UX Design
            </div>
          </div>
          <div className="text-balance">
            Our team of proficient Blockchain UI designers stays ahead of the
            curve with the latest trends. We employ a harmonious blend of
            colors, ultra-fast page speeds, enhanced app responsiveness, and
            captivating visual effects that align with your brand identity. With
            animations, we elevate the user experience in the mobile realm.
          </div>
        </div>

        <div className="flex flex-col px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="space-y-3">
            <img src={UnitTesting} className="h-10" />
            <div className="text-xl text-blue-500">
              Development and Unit Testing
            </div>
          </div>
          <div className="text-balance">
            Daily standup meetings, weekly technical reviews, and the
            implementation of advanced CI/CD processes serve as pillars
            reinforcing the enhancement of Distributed Ledger Technology (DLT),
            ensuring a seamless and secure integration and transaction journey
            within the blockchain.
          </div>
        </div>

        <div className="flex flex-col px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="space-y-3">
            <img src={QA} className="h-10" />
            <div className="text-xl text-blue-500">
              Quality Assurance
            </div>
          </div>
          <div className="text-balance">
            Our committed quality assurance engineers, supported by BrowserStack
            Test Observability, continuously examine your dApps app schema or
            website schema. They oversee test reporting, precision debugging,
            and early-stage detection of flaky tests during development.
          </div>
        </div>

        <div className="flex flex-col px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="space-y-3">
            <img src={Deployement} className="h-10" />
            <div className="text-xl text-blue-500">Deployment</div>
          </div>
          <div className="text-balance">
            Once your product is launched to users, we remain by your side
            throughout the journey. We guarantee 24/7/365 uptime and configure
            live monitoring with real-time alerts to ensure your product stays
            operational.
          </div>
        </div>

        <div className="flex flex-col px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="space-y-3">
            <img src={Support} className="h-10" />
            <div className="text-xl text-blue-500">
              Support & Maintenance
            </div>
          </div>
          <div className="text-balance">
            In case you need to update any functionality or add custom features
            and conduct an upgrade, hire our expert engineers. We offer an
            extensive maintenance service including server load monitoring, code
            back-ups, performance and security audits.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockchainFourthContainer;
