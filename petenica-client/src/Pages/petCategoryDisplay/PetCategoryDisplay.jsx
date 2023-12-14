import { Link } from "react-router-dom";

const PetCategoryDisplay = ({showPetCategory}) => {
    console.log(showPetCategory);
    const {pet_image, pet_name, pet_age, pet_location, long_description, short_description} = showPetCategory || {}
    return (
        <div >
<div className="relative transform transition duration-500 hover:scale-110 flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={pet_image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {pet_name}
    </h4>
    <span className="block mb-5 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        <h1>
        <span className="font-bold">Age:</span> {pet_age} year
        </h1>
        <div className="border-b mt-2 border-dashed border-black">
        </div>
    </span>

    <span className="block mb-5 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        <h1>
        <span className="font-bold">Behaviour:</span> {short_description}
        </h1>
        <div className="border-b mt-2 border-dashed border-black">
        </div>
    </span>

    <span className="block mb-5 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        <h1>
        <span className="font-bold">Location:</span> {pet_location}
        </h1>
        <div className="border-b mt-2 border-dashed border-black">
        </div>
    </span>
    <span className="block mb-5 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        <h1>
        <span className="font-bold">About {pet_name}:</span> {long_description}
        </h1>
        <div className="border-b mt-2 border-dashed border-black">
        </div>
    </span>
    <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
  </div>
</div>


        </div>
    );
};

export default PetCategoryDisplay;