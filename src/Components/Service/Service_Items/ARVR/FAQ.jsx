// import Accordion from "./Accordion";
import { useState } from "react";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How can AR/VR advertisement benefit my business?",
      data: `AR/VR advertisement can enhance brand engagement, increase customer interaction, and provide memorable experiences that drive conversions and customer loyalty.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What industries can benefit from AR/VR advertisement?",
      data: `Virtually any industry can benefit from AR/VR advertisement, including retail, real estate, automotive, tourism, education, and entertainment.`,
      isOpen: false,
    },
    {
      key: 3,
      title:
        "What are some successful examples of AR/VR advertisement campaigns?",
      data: `Successful AR/VR advertisement campaigns include IKEA's augmented reality furniture app, Pokemon Go's location-based augmented reality game, and Mercedes-Benz's virtual reality test drive experience.`,
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
          <h2 className="text-4xl mx-auto font-semibold primaryColor">FAQ's</h2>
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
    <div
      className="rounded-lg mb-5 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <button
        className="w-[80%] mx-auto rounded-lg p-4 text-left flex md:px-28 justify-between items-center bg-gray-200 
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
        <div className="py-4 w-[80%] mx-auto rounded-b-lg md:px-10 text-lg bg-gray-100 text-[#0C2D57]">
          {props.data}
        </div>
      )}
    </div>
  );
}
