import React from "react";

function CallToTeam() {
  return (
    <div className="w-full px-4 bg-[url(https://img.freepik.com/free-photo/modern-background-with-lines_1361-3533.jpg?w=1380&t=st=1707736721~exp=1707737321~hmac=56a2f97ba61186f0b67ad539e84b572f0c8e9c6aeee6773c19bfaea0837ac073)] h-[700px] flex flex-col justify-center bg-cover bg-no-repeat">
      <div className="lg:w-[1280px] mx-auto flex flex-col justify-around gap-y-10 text-white">
        <div
          className="lg:text-6xl text-3xl font-semibold leading-normal"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Partner With a Digital Marketing Agency That Delivers Growth
        </div>
        <div className="md:text-lg"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
        >
          We’re a full-service digital marketing agency that helps brands that
          want to get noticed and dominate their industry. We love marketing. We
          eat, sleep and breathe it. But more importantly, we love seeing our
          clients grow their businesses with our help. There’s nothing more
          satisfying than playing a pivotal role in the success of another
          business. Whether you’re a fresh-faced startup or a seasoned
          enterprise, we want to be the one that helps you chart a course to
          explosive growth. If this sounds good to you, then let’s talk
        </div>
        <div className="w-56 bg-blue-900 h-14 flex item-center justify-center font-medium hover:bg-blue-600 transition duration-300 "
        data-aos="fade-right"
        data-aos-duration='1000'
        >
          <button>Speak to our team</button>
        </div>
      </div>
    </div>
  );
}

export default CallToTeam;
