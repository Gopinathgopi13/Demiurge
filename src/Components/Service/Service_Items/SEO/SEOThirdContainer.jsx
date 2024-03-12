import React from "react";
import SEO_1 from '../../../../assets/SEO/SEO_1.png'
import SEO_2 from '../../../../assets/SEO/SEO_2.png'
import SEO_3 from '../../../../assets/SEO/SEO_3.png'
import SEO_4 from '../../../../assets/SEO/SEO_4.png'
import SEO_5 from '../../../../assets/SEO/SEO_5.png'
import SEO_6 from '../../../../assets/SEO/SEO_6.png'
import SEO_7 from '../../../../assets/SEO/SEO_7.png'
function SEOThirdContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto my-5 space-y-5 text-white px-4">
      <div className="lg:text-4xl text-3xl font-semibold my-5 py-5 primaryColor">
        Our SEO Strategy can deliver:
      </div>
      <div className="grid lg:grid-cols-3 gap-5 px-10">
        <div
          className="flex flex-col items-center bg-white py-5 text-black rounded-lg"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="">
            <img src={SEO_1} className="h-16" />
          </div>
          <div className="px-5 text-lg font-light">
            Identifying relevant keywords and phrases that potential customers
            are using to search for products or services.
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white py-5 text-black rounded-lg"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="">
            <img src={SEO_2} className="h-16" />
          </div>
          <div className="px-5 text-lg font-light">
            Optimizing various elements on your website, including meta tags,
            headings, and content, to improve search engine visibility and
            rankings.
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white py-5 text-black rounded-lg"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="">
            <img src={SEO_3} className="h-16" />
          </div>
          <div className="px-5 text-lg font-light">
            Developing high-quality, keyword-rich content that resonates with
            your target audience and aligns with search engine algorithms.
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white py-5 text-black rounded-lg"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="">
            <img src={SEO_4} className="h-16" />
          </div>
          <div className="px-5 text-lg font-light">
            Conducting comprehensive audits of your website's technical aspects,
            such as site structure, site speed, mobile-friendliness, and fixing
            any issues that may affect search engine rankings.
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white py-5 text-black rounded-lg"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="">
            <img src={SEO_5} className="h-16" />
          </div>
          <div className="px-5 text-lg font-light">
            Acquiring high-quality backlinks from reputable websites to improve
            your website's authority and credibility in the eyes of search
            engines.
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white py-5 text-black rounded-lg"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="">
            <img src={SEO_6} className="h-16" />
          </div>
          <div className="px-5 text-lg font-light">
            Optimizing your website for local search queries to improve
            visibility in local search results, including local keyword
            optimization, Google My Business optimization, and local directory
            listings.
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white py-5 text-black rounded-lg"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="">
            <img src={SEO_7} className="h-16" />
          </div>
          <div className="px-5 text-lg font-light">
            Developing customized SEO strategies tailored to your business
            goals, industry, and target audience, and providing ongoing
            consultation and support.
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white py-5 text-black rounded-lg"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="">
            <img src={SEO_3} className="h-16" />
          </div>
          <div className="px-5 text-lg font-light">
            Providing regular reporting and analysis of key performance metrics,
            such as website traffic, keyword rankings, and measure the
            effectiveness of SEO efforts.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SEOThirdContainer;
