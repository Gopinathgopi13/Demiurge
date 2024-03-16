import ServicesCard from "./ServicesCard";
import serviceData from "../../../Utilities/ServiceData";
import Card from "./Card";
function ServiceContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center mx-auto px-4">
      <div className="lg:text-4xl text-3xl font-bold my-10 primaryColor">
        Our Digital <br /> Marketing Services
      </div>
      <div className="lg:text-lg lg:w-[60%] mb-12">
        We’re experts in all things marketing. Business-to-business,
        cryptocurrency, NFT, and high-growth startup brands are our sweet spot.
        Discover how we can scale your business to new heights through our
        strategic services below:
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 overflow-hidden">
        {serviceData.map(({ id, logo, name, description, path }, index) => {
          // console.log(id)
          return (
            <ServicesCard
              id={id}
              logo={logo}
              name={name}
              description={description}
              path={path}
              key={index}
            />
          );
        })}
      </div>
      <div>{/* <Card/> */}</div>
    </div>
  );
}

export default ServiceContainer;

// {id, logo, name, description}
