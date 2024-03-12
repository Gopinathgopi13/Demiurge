import React from "react";
import SearchEO from "../../../../assets/web1.jpg";
import SearchEO2 from "../../../../assets/wev2.jpg";
function WebSecondContainer() {
  return (
    <div className="max-w-[1280px] mx-auto space-y-10 py-20 md:px-4">
      <div className="space-y-10">
        <div className="md:text-4xl font-semibold primaryColor text-3xl">
          Get cutting-edge designs from a proven web development service
        </div>
        <div className="text-lg">
          <p>
            Your website acts as a gateway to your brand, and naturally, you
            want to make a strong impression. You need a memorable and highly
            responsive site with intuitive navigation. Ultimately, your aim is
            to provide consumers with a seamless browsing experience that
            captures their interest long enough for them to uncover your unique
            offerings.
          </p>
        </div>
      </div>
      {/* <div className="w-[95%] grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-[#0c2d57] rounded-xl text-white">
        <div className="w-full rounded-xl overflow-hidden">
          <img src={SearchEO} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div className="font-semibold text-2xl primaryColor">
            Harness The Expertise Of A Leading Website Development Company
          </div>
          <p>
            Your website provides a window into your brand, and ideally you want
            to put your best foot forward. You need a memorable and highly
            responsive site with intuitive navigation. Ultimately, you want your
            consumers to have a seamless browsing experience that engages them
            long enough to discover your unique offering.
          </p>
          <p>
            Your website provides a window into your brand, and ideally you want
            to put your best foot forward. You need a memorable and highly
            responsive site with intuitive navigation. Ultimately, you want your
            consumers to have a seamless browsing experience that engages them
            long enough to discover your unique offering.
          </p>
        </div>
      </div> */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-[#0c2d57] rounded-xl text-white">
        <div className="rounded-xl overflow-hidden">
          <img src={SearchEO2} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div className="font-semibold text-2xl primaryColor">
            Specialist Website Development Services That Scale Your Business
          </div>
          <p>
            Our approach is straightforward: We create high-performing,
            user-friendly websites that ensure customer retention.
          </p>
          <p>We are a full-service web development company, offering:</p>
          <ul>
            <li>Custom Website Design & Development</li>
            <li>E-commerce Website Development</li>
            <li>Third Party API Development & Integration</li>
            <li>Web App Development</li>
            <li>Mobile App Development</li>
            <li>HTML5 Web Development</li>
            <li>WordPress Web Development</li>
            <li>UX/UI Design</li>
            <li>CMS Integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WebSecondContainer;
