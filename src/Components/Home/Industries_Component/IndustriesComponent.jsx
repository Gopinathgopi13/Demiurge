import React from "react";
import IndustriesCard from "./IndustriesCard";
import industriesData from "../../../Utilities/IndustriesData";
function IndustriesComponent() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center px-4 my-20 mx-auto">
      <div className="lg:text-7xl text-4xl font-medium my-5">Our Industries</div>
      <div className="lg:text-xl lg:w-[60%] mb-12 text-justify">
        Our creative digital marketing firm has helped a diverse range of
        businesses and organizations achieve their advertising objectives. With
        extensive experience working in numerous industries, we have the
        insights and expertise to help you discover your true potential.
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-9">
        {industriesData.map(({ id, logo, name, description, path }, index) => {
          // console.log(id)
          return (
            <IndustriesCard
              id={id}
              path={path}
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
