import Marquee from "react-fast-marquee";
function Page() {
  return (
    <div className="w-full h-40">
      <Marquee  
        className="text-8xl font-bold h-full"
        gradient
        //   delay={1}
        gradientWidth={900}
        speed={80}
      >
        Thriving - Thriving - Thriving - Thriving -
      </Marquee>
    </div>
  );
}

export default Page;
