import React from "react";
import ServicesCard from "./ServicesCard";
import serviceData from "../../../Utilities/ServiceData";
function ServiceContainer() {
  return (
    <div className="w-[1280px] mx-auto border ">
      <div className="h-32 text-6xl font-bold mb-9">
        Our Digital <br /> Marketing Services
      </div>
      <div className="text-xl mb-9">
        We’re experts in all things marketing. Business-to-business, <br /> 
        cryptocurrency, NFT, and high-growth startup brands are our <br />sweet spot.
        Discover how we can scale your business to new <br /> heights through our
        strategic services below:
      </div>
      <div className="grid grid-cols-4 gap-4">
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