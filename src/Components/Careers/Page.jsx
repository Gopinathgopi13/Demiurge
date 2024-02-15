import Marquee from "react-fast-marquee";
function Page() {
  return (
    <div className="w-full h-40">
      <Marquee
        className="text-8xl font-bold h-full"
        gradient
        gradientWidth={900}
        speed={100}
      >
        -Hiring- &nbsp; &nbsp; -Hiring- &nbsp; &nbsp; -Hiring-
      </Marquee>
    </div>
  );
}

export default Page;
