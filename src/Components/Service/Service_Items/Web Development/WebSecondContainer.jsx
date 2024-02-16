import React from "react";
import SearchEO from "../../../../assets/web1.jpg";
import SearchEO2 from "../../../../assets/wev2.jpg";
function WebSecondContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto space-y-10 py-20">
      <div className="text-white space-y-10">
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
      <div className="w-[95%] grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 bg-[#121212] rounded-xl text-white">
        <div className="w-full rounded-xl overflow-hidden">
          <img src={SearchEO} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div className="font-semibold text-2xl ">Lorem, ipsum dolor.</div>
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
      </div>
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 bg-[#121212] rounded-xl text-white">
        <div className="rounded-xl overflow-hidden">
          <img src={SearchEO2} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div className="font-semibold text-2xl ">Lorem, ipsum dolor.</div>
          <p className="text-xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor ab
            ut voluptate numquam cupiditate! Voluptate beatae tempora aliquid
            tempore autem excepturi reprehenderit, ducimus in harum, deserunt
            doloremque? Accusamus, tempore? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Nesciunt, quasi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quis, ipsam! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Tenetur, provident.
          </p>
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

export default WebSecondContainer;
