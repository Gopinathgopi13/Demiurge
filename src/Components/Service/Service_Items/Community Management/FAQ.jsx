// import Accordion from "./Accordion";
import { useState } from "react";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Why is having an active community important for my project?",
      data: `An active community boosts project success through loyalty, feedback, and collaboration. It fosters engagement, attracts new members, and refines project offerings, ensuring long-term viability and growth.`,
      isOpen: false,
    },
    {
      key: 2,
      title:
        "How do you ensure continuous engagement within your online communities?",
      data: `
      To maintain engagement within your online communities, consider strategies like regularly sharing interesting content, facilitating discussions, organizing events, responding promptly to member queries, fostering inclusivity, and recognizing active participation.`,
      isOpen: false,
    },
    {
      key: 3,
      title:
        "What are some common pitfalls encountered when building a crypto community?",
      data: `In crypto community building, some common mistakes include ineffective communication, overpromising without delivering, ignoring community feedback, lacking transparency, inconsistent engagement, poor community management, and failing to adapt to evolving needs.`,
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
      <div className="lg:w-[1280px] flex flex-col justify-center gap-5 mx-auto py-7">
        <div
          className="text-center text-white mb-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="ture"
        >
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
