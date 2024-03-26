import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import './Terms.css'

const TermsAndCondition = () => {
  return (
    <div>
      <div className="bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="max-w-[1280px] mx-auto px-4 h-[100vh] flex flex-col items-center py-20 ">
        <div className="lg:text-6xl text-3xl lg:w-[70%] text-center font-extrabold leading-snug primaryColor">
          Terms and Conditions
        </div>
        <div className="leading-7">
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold">Introduction</h1>
            <p>
              These Terms & Conditions govern your use of Demiurge digital
              marketing services and website(demiurge.in). By accessing or using
              our Services, you agree to be bound by these Terms & Conditions.
              If you do not agree to these Terms & Conditions, please do not use
              our Services.
            </p>
          </div>
          <div className="mt-3 space-y-2 ">
            <h1 className="text-2xl font-semibold">Services</h1>
            <p>
              We provide a range of digital marketing services including but not
              limited to:
              <ul className="list-decimal pl-10 my-3">
                <li>Social Media Marketing</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Performance Marketing</li>
                <li>PR (Public Relations)</li>
                <li>Video Marketing</li>
                <li>Branding</li>
                <li>Community Management</li>
                <li>Website Development</li>
                <li>CGI Advertisement</li>
                <li>Mobile App Development</li>
                <li>AR/VR Advertisement</li>
                <li>Blockchain Development</li>
                <li>Lead Generation</li>
              </ul>
              Our services are subject to change without prior notice. We
              reserve the right to modify, suspend, or discontinue any aspect of
              our Services at any time.
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold">Client Responsibilities</h1>
            <p>
              <ul>
                <li>
                  Clients must provide accurate and up-to-date information
                  required for the provision of our services.
                </li>
                <li>
                  Clients are responsible for the content they provide for
                  marketing purposes, ensuring it complies with all applicable
                  laws and regulations.
                </li>
              </ul>
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold">Payments and Fees</h1>
            <p>
              <ul>
                <li>
                  Payment terms and fees for our services are outlined in our
                  separate Billing Policy.
                </li>
                <li>
                  Failure to make payments may result in suspension or
                  termination of services.
                </li>
              </ul>
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold">Intellectual Property</h1>
            <p>
              <ul>
                <li>
                  All intellectual property rights related to our Services,
                  including but not limited to trademarks, logos, and content,
                  are owned by Demiurge.
                </li>
                <li>
                  Clients retain ownership of any content they provide for
                  marketing purposes.
                </li>
              </ul>
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold">Confidentiality</h1>
            <p>
              <ul>
                <li>
                  We respect the confidentiality of our clients' information and
                  will not disclose it to third parties without consent, except
                  as required by law.
                </li>
              </ul>
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold"> Limitation of Liability</h1>
            <p>
              <ul>
                <li>
                  Our liability is limited to the extent permitted by law. We
                  are not liable for any indirect, incidental, or consequential
                  damages arising from the use of our Services.
                </li>
              </ul>
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold">Indemnification</h1>
            <p>
              <ul>
                <li>
                  Clients agree to indemnify and hold harmless Demiurge from any
                  claims, damages, or losses arising from their use of our
                  Services or violation of these Terms & Conditions.
                </li>
              </ul>
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold">Termination</h1>
            <p>
              <ul>
                <li>
                  Either party may terminate the agreement for any reason by
                  providing written notice to the other party.
                </li>
                <li>
                  Upon termination, clients are responsible for payment of any
                  outstanding fees for services rendered.
                </li>
              </ul>
            </p>
          </div>
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-semibold">
              Changes to Terms & Conditions
            </h1>
            <p>
              <ul>
                <li>
                  We reserve the right to update or modify these Terms &
                  Conditions at any time without prior notice. The updated Terms
                  & Conditions will be effective upon posting on our website.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="bg-[#0c2d57] w-full h-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
