// import Accordion from "./Accordion";
import { useState } from "react";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: " How can CGI advertising benefit my brand or business?",
      data: `CGI advertising can benefit your brand or business by offering limitless creativity, allowing you to create visually stunning and memorable ads that stand out in a crowded digital landscape, engage your audience more effectively, and drive increased brand awareness and customer engagement.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "How does it differ from traditional advertising?",
      data: `
      CGI advertising utilizes computer-generated imagery to create visuals and animations for advertisements, offering limitless creative possibilities. In contrast, traditional advertising relies on physical sets, props, and actors, limiting creative flexibility and often requiring higher production costs.`,
      isOpen: false,
    },
    {
      key: 3,
      title:
        "Is CGI advertising suitable for all budgets, or is it reserved for large corporations?",
      data: `CGI advertising can be customized for budgets of all sizes, but complex CGI productions are typically associated with larger corporations due to higher costs. However, with strategic planning and creativity, even smaller businesses can utilize CGI elements effectively in their advertising campaigns.`,
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
        className="w-[90%] mx-auto rounded-t-lg p-4 text-left flex md:px-16 justify-between items-center bg-gray-200 
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
        <div className="p-4 w-[90%] mx-auto rounded-b-lg md:px-16  text-lg bg-gray-100 text-[#0C2D57]">
          <span className="primaryColor text-xl">Answer: </span>{props.data}
        </div>
      )}
    </div>
  );
}
