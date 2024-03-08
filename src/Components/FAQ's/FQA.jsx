import Accordion from "./Accordion";
import { useState } from "react";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Do you specialize in serving startups and small businesses?",
      data: `Definitely! We specialize in empowering startups and small businesses to conquer the digital realm with targeted strategies and budget-friendly solutions.`,
      isOpen: false,
    },
    {
      key: 2,
      title:
        "How long does it take to see results from digital marketing efforts?",
      data: `Results from digital marketing efforts can vary, but typically, you'll start seeing some impact within a few weeks, with significant improvements taking several months. It's important to stay consistent and patient for long-term success.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What sets your agency apart from competitors?",
      data: `Our agency distinguishes itself through our commitment to delivering meaningful results, ensuring every dollar spent is worth it, backed by innovative strategies and personalized service.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "Do you offer training or educational resources for clients?",
      data: `Yes, we offer comprehensive training and educational resources for our clients to empower them with the knowledge and skills they need to succeed in digital marketing.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "What strategy do you suggest for my business?",
      data: `
      Digital strategy varies for each business. We analyze your history and needs before discussing the best approach tailored to your goals.`,
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
      <div className="max-w-[1280px] flex flex-col justify-center gap-5 mx-auto py-7">
        <div
          className="text-center text-white mb-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="ture"
        >
          <h2 className="text-4xl font-bold mx-auto primaryColor">FAQ's</h2>
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
