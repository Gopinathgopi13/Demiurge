export default function Accordion(props) {
  return (
    <div className="rounded-lg mb-5 overflow-hidden">
      <button
        className="w-full p-4 text-left flex md:px-28 justify-between items-center bg-gray-200 
						hover:bg-gray-300 transition duration-300"
        onClick={props.toggleAccordion}
      >
        <span className="font-semibold text-lg"> {props.title}</span>
        <span
          className={`float-end transform text-[#E48F45] ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } 
								transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="py-4 md:px-10 px-5 text-md bg-gray-100 text-[#0C2D57]">
          {props.data}
        </div>
      )}
    </div>
  );
}
