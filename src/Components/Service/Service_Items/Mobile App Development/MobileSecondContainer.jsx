import React from "react";
import SearchEO from "../../../../assets/web1.jpg";
import SearchEO2 from "../../../../assets/wev2.jpg";
import phone from "../../../../assets/SVG/phone.svg";
function MobileSecondContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto space-y-10 py-20">
      <div className="text-white space-y-10 px-5">
        <div className="lg:text-6xl text-3xl">
          Acquire state-of-the-art designs with a proven web development company
        </div>
        <div className="text-xl">
          <p>
            Your website provides a window into your brand, and ideally you want
            to put your best foot forward. You need a memorable and highly
            responsive site with intuitive navigation. Ultimately, you want your
            consumers to have a seamless browsing experience that engages them
            long enough to discover your unique offering.
          </p>
        </div>
      </div>

      {/* IOS App Development */}
      <div className="w-[95%] grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 bg-[#121212] rounded-xl text-white">
        <div className="w-full rounded-xl overflow-hidden">
          <img src={SearchEO} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div>
            <img src={phone} alt="" />
          </div>
          <div className="font-semibold text-2xl ">IOS App Development</div>
          <p>
            Your website provides a window into your brand, and ideally you want
            to put your best foot forward. You need a memorable and highly
            responsive site with intuitive navigation. Ultimately, you want your
            consumers to have a seamless browsing experience that engages them
            long enough to discover your unique offering.
          </p>
        </div>
      </div>

      {/* Android App Development */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 bg-[#121212] rounded-xl text-white">
        <div className="rounded-xl overflow-hidden">
          <img src={SearchEO2} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div>
            <img src={phone} alt="" />
          </div>
          <div className="font-semibold text-2xl ">Android App Development</div>
          <p>
            Your website provides a window into your brand, and ideally you want
            to put your best foot forward. You need a memorable and highly
            responsive site with intuitive navigation. Ultimately, you want your
            consumers to have a seamless browsing experience that engages them
            long enough to discover your unique offering.
          </p>
        </div>
      </div>

      {/* Cross-Platform App Development */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 bg-[#121212] rounded-xl text-white">
        <div className="rounded-xl overflow-hidden">
          <img src={SearchEO2} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div>
            <img src={phone} alt="" />
          </div>
          <div className="font-semibold text-2xl ">
            Cross-Platform App Development
          </div>
          <p>
            Your website provides a window into your brand, and ideally you want
            to put your best foot forward. You need a memorable and highly
            responsive site with intuitive navigation. Ultimately, you want your
            consumers to have a seamless browsing experience that engages them
            long enough to discover your unique offering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileSecondContainer;
