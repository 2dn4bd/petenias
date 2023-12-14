import { Link } from "react-router-dom";

const DisplayPetCategory = ({ categorySingle }) => {
    const { _id, category, image } = categorySingle || {}
    return (
        <div>
            <Link to={`/petdetails/${category}`}>
                <div
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4  duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
                    <img className="object-cover w-full h-80"
                        src={image}
                        alt="Flower and sky" />
                    <div className="items-center text-center m-3">
                        <p className="text-lg font-bold text-gray-700">{category}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DisplayPetCategory;