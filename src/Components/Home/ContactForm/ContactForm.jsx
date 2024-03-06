import React from "react";
import Form from "./Form";

function ContactForm() {
  return (
    <div className="w-full px-5 py-20  bg-[#0C2D57]">
      <div className="lg:w-[1280px] grid lg:grid-cols-2 gap-5 items-center justify-center mx-auto">
        <div
          className="text-white flex flex-col justify-around gap-5"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="lg:text-4xl text-3xl font-semibold">
            Get in touch with Demiurge
          </div>
          <div className="lg:text-lg font-light">
            <div>No matter what you need - we are here to help.</div>
            <div> Give us a few details and we will be in touch soon.</div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
