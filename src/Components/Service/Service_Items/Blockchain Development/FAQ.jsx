// import Accordion from "./Accordion";
import { useState } from "react";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What are the primary components of a blockchain application?",
      data: `A blockchain application typically consists of a network of nodes, a consensus mechanism, a distributed ledger, smart contracts (if applicable), and a user interface for interacting with the application.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "How do consensus mechanisms work in blockchain development?",
      data: `
      Consensus mechanisms are algorithms that ensure all nodes in a blockchain network agree on the state of the ledger. Examples include Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS).`,
      isOpen: false,
    },
    {
      key: 3,
      title:
        "What role does cryptography play in blockchain development?",
      data: `Cryptography ensures the security and integrity of blockchain transactions by encrypting data, generating digital signatures, and verifying identities.`,
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
        className="w-[90%] mx-auto rounded-lg p-4 text-left flex md:px-16 justify-between items-center bg-gray-200 
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
        <div className="p-4 w-[90%] mx-auto rounded-b-lg md:px-10 text-lg bg-gray-100 text-[#0C2D57]">
          {props.data}
        </div>
      )}
    </div>
  );
}
