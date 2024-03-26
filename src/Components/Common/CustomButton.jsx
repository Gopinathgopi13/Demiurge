import { FaArrowRight } from "react-icons/fa";

const CustomButton = ({ text }) => {
  return (
    <button
      className="lg:px-10 px-5 py-3 lg:text-xl font-semibold border-2 hover:border-[#ff8400] flex items-center gap-4 cursor-pointer"
      style={{
        background:
          "linear-gradient(to right, white 10%, #e48f45 40%, white 30%)",
        backgroundPosition: "0",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "shine 3s infinite linear",
        animationFillMode: "forwards",
        WebkitTextSizeAdjust: "none",
      }}
      onClick={() => {
        window.open(
          "https://calendly.com/philomenjohn/digital-marketing-collab"
        );
      }}
    >
      <span id="shine">{text}</span>
      <FaArrowRight size={20} className="primaryColor" />
    </button>
  );
};

export default CustomButton;
