import React from "react";
import socialMedia  from '../../../assets/SVG/Social_media.svg'
function ServicesCard({id, logo, name, description}) {
    // console.log(data)
  let datas = {
    id: 1,
    logo: socialMedia,
    name: "Social Media",
    description:
      "Engage your audience on their favourite platforms to foster meaningful relationships that build trust. ",
  };
  return (
    <div className="w-60  border text-base">
      <div className=" flex mb-5 items-center gap-2">
        <img src={logo} alt="" />
        <div className="text-xl font-semibold">{name}</div>
      </div>
      <div className="text-gray-500 font-normal">{description}</div>
    </div>
  );
}

export default ServicesCard;
