import { useLoaderData } from "react-router-dom";
import CategoryBanner from "../../Components/categoryBanner/CategoryBanner";
import PetCategoryDisplay from "../petCategoryDisplay/PetCategoryDisplay";

const PetCategoryDetails = () => {
    const petDetails = useLoaderData()
    return (
        <div>
            <CategoryBanner></CategoryBanner>
            <div className="text-center">
                <p className="flex items-center gap-2 text-center justify-center ">
                <hr className="w-5 border-black border-2 font-bold text-lg " /> <span className="text-xl">FIND YOUR FRIEND</span> <hr className="w-5 border-black border-2 font-bold text-lg h-" />
                
                </p>
                <h1 className="text-5xl font-bold mt-2 mb-7">
                ADOPTION
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
            {
                petDetails.map(details => <PetCategoryDisplay
                key={details._id}
                showPetCategory={details}
                ></PetCategoryDisplay>)
            }
            </div>
        </div>
    );
};

export default PetCategoryDetails;