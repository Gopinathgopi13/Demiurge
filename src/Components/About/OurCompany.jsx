import Founder from "../../assets/3D_Image/Founder.jpg";
import CoFounder from "../../assets/3D_Image/CoFounder.jpg";
function OurCompany() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 lg:pb-16 h-[70vh] grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col justify-center lg:space-y-10 space-y-5">
          <div className="text-3xl font-bold text-blue-600">Our Company</div>
          <div className="text-4xl font-light">Small Team, Big Dreams</div>
          <div className="w-[90%] font-normal text-xl">
            Every day, we build products, brands and websites that help our
            partners stand out, connect with customers and grow faster.
          </div>
        </div>
        <div className="w-[90%] h-[90%] object-fill relative">
          <div className="w-[55%] h-[85%] absolute bottom-0 left-0 z-20">
            <img src={Founder} className="h-[80%]" alt="Founder" />
            <div className="h-[20%]">
              <span className="block font-semibold">Lorem, ipsum.</span>
              <span className="block">Founder</span>
            </div>
          </div>
          <div className="w-[55%] h-[85%] absolute right-0 top-0">
            <img src={CoFounder} alt="Co-Founder" className="h-[80%]" />
            <div className="h-[20%] flex flex-col items-center">
              <span className="block font-semibold">Lorem, ipsum.</span>
              <span className="block">Co-Founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCompany;
