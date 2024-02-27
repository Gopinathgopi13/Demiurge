import Accordion from "./Accordion";
import { useState } from "react";

const FQA = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What are your marketing specialities?",
      data: `Between us, we have expertise in all aspects of digital marketing, from designing websites and crafting SEO strategies to producing videos and drafting paid ads. But when it comes to business-to-business, financial tech, cryptocurrency, and high-growth startup brands — this is where our web design and digital marketing company most excels. We believe our team’s first-hand experience in these industries gives us a competitive edge that helps us better serve our clients.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "How can my business benefit from partnering with your agency?",
      data: `Online digital marketing is an ever-changing landscape, and it can be difficult to even know where to start online if you don’t have a solid foundation in the basics. Our agency can provide expert guidance and strategic plans that are tailored to your brand and your long-term goals. Now that you’ve found our digital marketing website, you can avoid the common pitfalls and get on the fast track to long-term growth. `,
      isOpen: false,
    },
    {
      key: 3,
      title: "How do I determine my marketing budget?",
      data: `There’s no ‘one size fits all’ answer to this question, as the amount you should allocate will depend on various factors, such as the size of your business, your long-term goals, and the industries you operate in. However, as a general rule, companies should be spending between 2-5% of their total revenue to promote their brand. `,
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
    <div className="w-full px-4 bg-[#0C2D57] bg-cover bg-no-repeat py-10">
      <div className="lg:w-[1280px] flex flex-col justify-center gap-5 mx-auto py-7">
        <div className="text-center text-white mb-5"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="ture"
        >
          <h2 className="text-6xl mx-auto">FQA's</h2>
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

export default FQA;
