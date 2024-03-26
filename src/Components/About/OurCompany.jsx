import Founder from "../../assets/3D_Image/Founder.jpg";
import CoFounder from "../../assets/3D_Image/CoFounder.jpg";
function OurCompany() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto p-4 lg:pb-16 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className="flex flex-col lg:space-y-10 space-y-5">
          <div className="lg:text-5xl text-4xl font-bold text-[#E48F45]">Our Company</div>
          <div className="text-3xl font-light">Small Team, Big Dreams</div>
          <div className="w-[90%] font-normal text-xl">
            Every day, we build products, brands and websites that help our
            partners stand out, connect with customers and grow faster.
          </div>
        </div>
        <div className="flex justify-center items-center py-10">
          <div className="">
            <img src={Founder} className="h-80" alt="Founder" />
            <div className="">
              {/* <span className="block font-semibold">Lorem, ipsum.</span> */}
              {/* <span className="block">Founder</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCompany;
