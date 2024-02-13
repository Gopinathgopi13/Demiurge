import React from "react";
import Form from "./Form";

function ContactForm() {
  return (
    <div className="w-full px-5 py-20 bg-[url(https://img.freepik.com/free-photo/modern-background-with-lines_1361-3533.jpg?w=1380&t=st=1707736721~exp=1707737321~hmac=56a2f97ba61186f0b67ad539e84b572f0c8e9c6aeee6773c19bfaea0837ac073)] bg-cover bg-no-repeat">
      <div className="lg:w-[1280px] grid lg:grid-cols-2 gap-5 items-center justify-center mx-auto">
        <div className="text-white flex flex-col justify-around gap-5">
          <div className="lg:text-5xl text-3xl font-semibold">
            Get in touch with Demiurge
          </div>
          <div className="lg:text-lg font-light">
            <div>No matter what you need - we are here to help.</div>
            <div> Give us a few details and we will be in touch soon.</div>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
