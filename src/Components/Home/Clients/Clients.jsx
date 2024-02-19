import React from "react";
import ClientLogo from "./ClientLogo";
import clientLogo from "../../../Utilities/ClientLogos";
function Clients() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="lg:w-[1280px]">
        <div className="lg:text-6xl text-3xl font-semibold text-center underline">
          Join our growing list of happy clients
        </div>
        <div className=" grid lg:grid-cols-4 grid-cols-2 lg:gap-8">
          {clientLogo.map(({ id, logo }) => {
            return <ClientLogo key={id} logo={logo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;
