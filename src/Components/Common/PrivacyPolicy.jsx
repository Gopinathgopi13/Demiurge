import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <div>
        <div className="bg-[#0c2d57]">
          <Navbar />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 h-[100vh] flex flex-col items-center py-20 ">
          <div className="lg:text-6xl text-3xl lg:w-[70%] text-center font-extrabold leading-snug primaryColor">
            Privacy Policy
          </div>
          <div className="leading-7">
            <div className="mt-3 space-y-2">
              <h1 className="text-2xl font-semibold">
                {" "}
                Information We Collect
              </h1>
              <p>
                We may collect personal information from you when you interact
                with us, including but not limited to:
                <ul>
                  <li>
                    Contact information such as name, email address, phone
                    number, and mailing address.
                  </li>
                  <li>
                    Information about your business and marketing objectives.
                  </li>
                  <li>Payment information for processing transactions.</li>
                </ul>
              </p>
            </div>
            <div className="mt-3 space-y-2 ">
              <h1 className="text-2xl font-semibold">
                How We Use Your Information
              </h1>
              <p>
                We may use the information we collect for the following
                purposes:
                <ul>
                  <li>
                    To provide and personalize our services to meet your
                    business needs.
                  </li>
                  <li>
                    To communicate with you about our services, promotions, and
                    updates.
                  </li>
                  <li>To process transactions and payments.</li>
                  <li>To improve our website and services.</li>
                  <li>To comply with legal and regulatory requirements.</li>
                </ul>
              </p>
            </div>
            <div className="mt-3 space-y-2">
              <h1 className="text-2xl font-semibold">Information Sharing</h1>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described below:
                <ul>
                  <li>
                    We may share your information with trusted service providers
                    who assist us in operating our website, conducting our
                    business, or servicing you.
                  </li>
                  <li>
                    We may disclose your information when we believe it is
                    appropriate to comply with the law, enforce our site
                    policies, or protect ours or others' rights, property, or
                    safety.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-3 space-y-2">
              <h1 className="text-2xl font-semibold">Data Security</h1>
              <p>
                <ul>
                  <li>
                    We implement a variety of security measures to maintain the
                    safety of your personal information when you provide it to
                    us. However, please note that no method of transmission over
                    the internet or electronic storage is 100% secure, and we
                    cannot guarantee absolute security.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-3 space-y-2">
              <h1 className="text-2xl font-semibold">Your Choices</h1>
              <p>
                <ul>
                  <li>
                    You have the right to opt-out of receiving marketing
                    communications from us at any time. You can do this by
                    following the unsubscribe instructions included in the
                    emails we send you or by contacting us directly.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-3 space-y-2">
              <h1 className="text-2xl font-semibold">Children's Privacy</h1>
              <p>
                <ul>
                  <li>
                    Our website and services are not directed to individuals
                    under the age of 18. We do not knowingly collect personal
                    information from children under 18. If you are a parent or
                    guardian and believe that your child has provided us with
                    personal information, please contact us, and we will delete
                    such information from our systems.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-3 space-y-2">
              <h1 className="text-2xl font-semibold">
                {" "}
                Changes to This Policy
              </h1>
              <p>
                <ul>
                  <li>
                    We reserve the right to modify this Privacy Policy at any
                    time. Any changes will be effective immediately upon posting
                    on our website. We encourage you to review this Privacy
                    Policy periodically for any updates.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
