import React from "react";
import SearchEO from "../../../../assets/SVG/ppc-management.svg";

function CryptoThirdContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 space-y-16 py-10">
      <div className="md:text-6xl font-bold">
        Leverage Dedicated Blockchain Marketing Solutions That Unlock Sales &
        Revenue
      </div>
      <div className="grid md:grid-cols-3">
        <div className="col-span-1 h-[400px]">
          <img src={SearchEO} className="w-[90%] h-[100%]" alt="" />
        </div>

        <div className="flex flex-col justify-center text-justify px-5 gap-5 col-span-2">
          <div className="text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim
            asperiores fuga odio incidunt. Nulla, rerum explicabo similique
            illum facere ullam, amet laudantium a labore fugiat incidunt.
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            reiciendis esse velit corporis facilis laborum eligendi vel,
            explicabo exercitationem nisi quos error delectus quia mollitia.
            Necessitatibus dignissimos fugit consequatur consequuntur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default CryptoThirdContainer;
