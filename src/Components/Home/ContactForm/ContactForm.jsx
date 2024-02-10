import React from "react";
import Form from "./Form";

function ContactForm() {
  return (
    <div className="w-full bg-[url(black_background.jpg)] bg-cover bg-no-repeat mt-20">
      <div className="w-[1280px] h-[90vh] mx-auto flex items-center">
        <div className="w-2/4 h-[80%] text-white flex flex-col justify-center gap-10">
          <div className="text-5xl font-semibold">
            Get in touch with Demiurge
          </div>
          <div className="space-y-5 text-lg font-light">
            <div>No matter what you need - we are here to help.</div>
            <div> Give us a few details and we will be in touch soon.</div>
          </div>
        </div>
        <div className="w-2/4 h-[80%] flex justify-center items-center">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
