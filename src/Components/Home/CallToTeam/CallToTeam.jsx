import React from "react";

function CallToTeam() {
  return (
    <div className="w-full px-4 bg-[url(https://img.freepik.com/free-photo/modern-background-with-lines_1361-3533.jpg?w=1380&t=st=1707736721~exp=1707737321~hmac=56a2f97ba61186f0b67ad539e84b572f0c8e9c6aeee6773c19bfaea0837ac073)] h-[700px] flex flex-col justify-center bg-cover bg-no-repeat">
      <div className="lg:w-[1280px] mx-auto flex flex-col justify-around gap-y-10 text-white">
        <div
          className="lg:text-5xl text-3xl text-center font-semibold leading-normal"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Team up with a Digital Marketing Agency that doesn't just talk growth
          but delivers it.
        </div>
        <div
          className="md:text-lg text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          We're not your average marketing squad – we're the cool cats who live
          and breathe digital. Picture this: we're all about helping brands
          stand out, rule their turf, and grow like there's no tomorrow. We dig
          marketing, sure, but what really gets us going is seeing our clients
          kick goals and level up their biz game. Whether you're a newbie or a
          seasoned player, we're the crew that wants to turbocharge your growth.
          If that clicks with you, let's shoot the breeze.
        </div>
        <div
          className="w-56 bg-blue-900 h-14 flex item-center justify-center font-medium hover:bg-blue-600 transition duration-300 "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <button>Speak to our team</button>
        </div>
      </div>
    </div>
  );
}

export default CallToTeam;
