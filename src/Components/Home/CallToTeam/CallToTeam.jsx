import React from "react";

function CallToTeam() {
  return (
    <div className="w-full px-4 bg-[#0C2D57] py-10 flex flex-col justify-center bg-cover bg-no-repeat">
      <div className="max-w-[1280px] mx-auto flex flex-col justify-around items-center gap-y-10 text-white">
        <div className="lg:text-4xl text-xl text-center font-bold leading-normal primaryColor">
          Team up with a Digital Marketing Agency that doesn't just talk growth
          but delivers it.
        </div>
        <div className="md:text-lg text-md text-center">
          We're not your average marketing squad – we're the cool cats who live
          and breathe digital. we're all about helping brands stand out, rule
          their turf, and grow like there's no tomorrow.
          {/* We dig marketing, sure,
          but what really gets us going is seeing our clients kick goals and
          level up their biz game.{" "} */}
        </div>
        <div
          className="w-56 border-2 border-[#ff8400] h-14 flex item-center justify-center font-medium "
          onClick={() => {
            window.open(
              "https://calendly.com/philomenjohn/digital-marketing-collab"
            );
          }}
        >
          <button>Speak to our team</button>
        </div>
      </div>
    </div>
  );
}

export default CallToTeam;
