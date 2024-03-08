import React from "react";
import IndustriesCard from "./IndustriesCard";
import industriesData from "../../../Utilities/IndustriesData";
function IndustriesComponent() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center px-4 mx-auto">
      <div
        className="lg:text-4xl text-3xl font-bold my-5 primaryColor"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Our Industries
      </div>
      <div
        className="lg:text-lg lg:w-[60%] mb-12"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Our creative digital marketing firm has helped a diverse range of
        businesses and organizations achieve their advertising objectives. With
        extensive experience working in numerous industries, we have the
        insights and expertise to help you discover your true potential.
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-9">
        {industriesData.map(({ id, logo, name, description, path }, index) => {
          // console.log(id)
          return (
            <IndustriesCard
              id={id}
              logo={logo}
              name={name}
              description={description}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IndustriesComponent;
