import React, { useState } from "react";
import accordions from "../../Utilities/PositionDetails";

const PositionDetails = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div>
      <div className="uppercase">Currently No Hiring</div>
      {/* <div className="hs-accordion-group">
        {accordions.map(({ id, heading, content }) => (
          <div
            className={`hs-accordion ${
              openAccordion === id
                ? "hs-accordion-active:border-gray-200 bg-white"
                : ""
            } border my-2 rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent`}
            id={`hs-active-bordered-heading-${id}`}
            key={id}
          >
            <button
              className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-xl font-medium text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls={`hs-basic-active-bordered-collapse-${id}`}
              onClick={() => toggleAccordion(id)}
            >
              {heading}
              <svg
                className={`size-3.5 ${
                  openAccordion === id
                    ? "hs-accordion-active:block hidden"
                    : "hs-accordion-active:hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div
              id={`hs-basic-active-bordered-collapse-${id}`}
              className={`hs-accordion-content ${
                openAccordion === id ? "block" : "hidden"
              } w-full overflow-hidden transition-[height] duration-300`}
              aria-labelledby={`hs-active-bordered-heading-${id}`}
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-gray-200">{content}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default PositionDetails;
