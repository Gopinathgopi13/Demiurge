import React from "react";
import Form from "./Form";

function Querys() {
  return (
    <div className="w-full px-5 py-20 bg-BlueBG bg-cover bg-no-repeat">
      <div className="max-w-[1280px] grid lg:grid-cols-2 gap-5 items-center justify-center mx-auto">
        <div className="text-white flex flex-col justify-around gap-5">
          <div className="lg:text-5xl text-3xl font-semibold">
            Have any questions for us?
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

export default Querys;
