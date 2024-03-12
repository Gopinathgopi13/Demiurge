// import Accordion from "./Accordion";
import { useState } from "react";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is video marketing for business?",
      data: `Video marketing is the process of using videos to promote and market your product or service offering. It can be used to increase brand awareness, drive traffic to your website, or generate leads and sales. Most companies use video media to create short informative or entertaining recordings that are shared across their socials or company websites. `,
      isOpen: false,
    },
    {
      key: 2,
      title: "How can a video production service help my brand?",
      data: `Brands require content that is both informative and engaging in order to capture the attention of their target audiences. A video strategy can help you achieve this by promoting your brand in an engaging and visually appealing way. When used as part of a comprehensive strategy, a digital marketing video can help you achieve your business goals.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What type of content marketing video services do you provide?",
      data: `We can create videos for any stage of the marketing funnel, which extends from brand awareness to lead generation and sales.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div className="w-full px-4 bg-cover bg-no-repeat py-10">
      <div className="max-w-[1280px] flex flex-col justify-center gap-5 mx-auto py-7">
        <div className="text-center text-white mb-5">
          <h2 className="text-6xl mx-auto primaryColor">FAQ's</h2>
        </div>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

function Accordion(props) {
  return (
    <div className="rounded-lg mb-5 overflow-hidden">
      <button
        className="w-full p-4 text-left flex md:px-28 justify-between items-center bg-gray-200 
                          hover:bg-gray-300 transition duration-300"
        onClick={props.toggleAccordion}
      >
        <span className="font-semibold text-lg"> {props.title}</span>
        <span
          className={`float-end transform text-[#E48F45] ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } 
                                  transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="py-4 md:px-10 px-5 text-lg bg-gray-100 text-[#0C2D57]">
          {props.data}
        </div>
      )}
    </div>
  );
}
