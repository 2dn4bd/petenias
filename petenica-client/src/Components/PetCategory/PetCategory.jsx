import { useEffect, useState } from "react";
import DisplayPetCategory from "../DisplayPetCategory/DisplayPetCategory";

const PetCategory = () => {
    const [petCategorys, setPetCategory] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/petcategory')
        .then(res => res.json())
        .then(data =>{
            setPetCategory(data)
        })
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-4xl font-semibold md:text-4xl lg:text-5xl text-center py-5">
                    Our Pets category
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                petCategorys.map(petCategory => <DisplayPetCategory
                key={petCategory._id}
                categorySingle={petCategory}
                ></DisplayPetCategory>)
            }
            </div>
        </div>
    );
};

export default PetCategory;