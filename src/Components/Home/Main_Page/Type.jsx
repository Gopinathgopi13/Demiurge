import React from "react";
import Typewriter from "typewriter-effect";

function Type({}) {
  return (
    <Typewriter
      options={{
        strings: [" Sales", "Leads", "ROI"],
        autoStart: true,
        loop: true,
        delay: 100,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
