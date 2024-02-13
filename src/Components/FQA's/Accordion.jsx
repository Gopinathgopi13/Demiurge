// Accordion.js

export default function Accordion(props) {
  return (
    <div className="rounded-lg mb-5 overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-around items-center bg-gray-200 
						hover:bg-gray-300 transition duration-300"
        onClick={props.toggleAccordion}
      >
        <span> {props.title}</span>
        <span
          className={`float-end transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } 
								transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && <div className="p-4 text-white">{props.data}</div>}
    </div>
  );
}
