import React from "react";
import ClientLogo from "./ClientLogo";
import clientLogo from "../../../Utilities/ClientLogos";
function Clients() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[1280px]">
        <div className="text-6xl font-semibold text-center my-20">
          Join our growing list of happy clients
        </div>
        <div className=" grid grid-cols-4 gap-8">
          {clientLogo.map(({ id, logo }) => {
            return <ClientLogo key={id} logo={logo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;
