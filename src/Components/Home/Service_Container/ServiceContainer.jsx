import React from "react";
import ServicesCard from "./ServicesCard";
import serviceData from "../../../Utilities/ServiceData";
function ServiceContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto my-20 px-4">
      <div className="lg:text-6xl text-4xl font-bold my-5">
        Our Digital <br /> Marketing Services
      </div>
      <div className="lg:text-xl lg:w-[60%] mb-12 text-justify">
        We’re experts in all things marketing. Business-to-business,
        cryptocurrency, NFT, and high-growth startup brands are our sweet spot.
        Discover how we can scale your business to new heights through our
        strategic services below:
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-9">
        {
            serviceData.map(({id, logo, name, description}, index)=>{
                // console.log(id)
                return <ServicesCard id={id} logo={logo} name={name} description={description} key={index}/>
            })
        }
      </div>
    </div>
  );
}

export default ServiceContainer;


// {id, logo, name, description}