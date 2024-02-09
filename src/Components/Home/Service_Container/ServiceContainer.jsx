import React from "react";
import ServicesCard from "./ServicesCard";
import serviceData from "../../../Utilities/ServiceData";
function ServiceContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto my-56 ">
      <div className="h-32 lg:text-6xl font-bold mb-12">
        Our Digital <br /> Marketing Services
      </div>
      <div className="lg:text-xl mb-12">
        We’re experts in all things marketing. Business-to-business, <br /> 
        cryptocurrency, NFT, and high-growth startup brands are our <br />sweet spot.
        Discover how we can scale your business to new <br /> heights through our
        strategic services below:
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-9">
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