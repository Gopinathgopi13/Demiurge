import React from "react";
import ar1 from "../../../../assets/ar1.webp";
import ar2 from "../../../../assets/ar2.webp";
import ar3 from "../../../../assets/ar3.webp";
import ar4 from "../../../../assets/ar4.webp";
import ar5 from "../../../../assets/ar5.webp";
import ar6 from "../../../../assets/ar6.webp";
function ARVRSecondContainer() {
  return (
    <div className="max-w-[1280px] mx-auto space-y-10">
      <div className=" space-y-10 px-5">
        <div className="md:text-4xl font-semibold text-3xl primaryColor">
          Feature of AR/VR in Design/AD Agency
        </div>
        {/* <div className="text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nesciunt autem, consequatur voluptas voluptatum dicta porro aliquid
            obcaecati illum quibusdam quo ullam iure a praesentium dolorem
            magnam nam saepe incidunt. Repellendus perferendis amet eligendi?
            Nostrum nesciunt temporibus veniam tenetur iusto nobis libero,
            sapiente provident magni laborum ex magnam rerum nulla.
          </p>
        </div> */}
      </div>

      {/* 3D Product Visualisation */}
      <div className="w-[95%] grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 shadow-lg rounded-xl ">
        <div className="w-full rounded-xl overflow-hidden">
          <img src={ar1} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center md:px-5">
          <div className="font-semibold md:text-2xl text-xl primaryColor ">
            3D Product Visualisation
          </div>
          <p>
            AR/VR technology enables the creation of lifelike 3D product
            visualizations, providing designers with a powerful tool to showcase
            their products in unprecedented realism. This is invaluable for
            clients seeking custom products, offering them an immersive preview
            experience like never before.
          </p>
        </div>
      </div>

      {/* DESIGN COLLABORATION */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 shadow-lg rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={ar2} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center md:px-5">
          <div className="font-semibold md:text-2xl text-xl primaryColor">
            Design Collaboration
          </div>
          <p>
            AR and VR can be used to facilitate remote design collaboration,
            allowing designers and clients to work together in a virtual space.
            This can be especially useful for global teams or teams working on
            complex projects.
          </p>
        </div>
      </div>

      {/* INTERACTIVE PRODUCT DEMOS */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 shadow-lg rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={ar3} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center md:px-5">
          <div className="font-semibold md:text-2xl text-xl primaryColor">
            Interactive Product Demos
          </div>
          <p>
            AR/VR can be used to create interactive product demos, which can
            help designers to showcase the unique features of their products.
            This can be particularly useful for clients who are interested in
            complex or innovative products.
          </p>
        </div>
      </div>

      {/* AR ADVERTISING */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 shadow-lg rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={ar4} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center md:px-5">
          <div className="font-semibold md:text-2xl text-xl primaryColor">
            AR Advertising
          </div>
          <p>
            AR can be used to create augmented reality advertising campaigns,
            which can help ad agencies to create more engaging and interactive
            campaigns that capture the attention of consumers
          </p>
        </div>
      </div>

      {/* AR PRODUCT PACKAGING */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 px-10 gap-5 shadow-lg rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={ar5} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center md:px-5">
          <div className="font-semibold md:text-2xl text-xl primaryColor">
            AR Product Packaging
          </div>
          <p>
            AR can be used to create augmented reality product packaging, which
            can help ad agencies to create more engaging and interactive
            packaging designs that capture the attention of consumers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ARVRSecondContainer;
