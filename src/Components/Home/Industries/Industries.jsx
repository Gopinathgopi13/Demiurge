import React from "react";
import IndustriesCard from "./IndustriesCard";
import industriesData from "../../../Utilities/IndustriesData";
function Industries() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto my-56 ">
      <div className="h-32 lg:text-7xl font-medium">Our Industries</div>
      <div className="lg:text-xl lg:w-[60%] mb-20">
        Our creative digital marketing firm has helped a diverse range of
        businesses and organizations achieve their advertising objectives. With
        extensive experience working in numerous industries, we have the
        insights and expertise to help you discover your true potential.
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-9">
        {industriesData.map(({ id, logo, name, description }, index) => {
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

export default Industries;
