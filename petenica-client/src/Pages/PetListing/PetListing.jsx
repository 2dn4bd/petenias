import { useEffect, useState } from "react";
import DisplayPetListing from "../displayPetListing/DisplayPetListing";
import PetListingBanner from "../../Components/petListingBanner/PetListingBanner";
import Loading from "../../Components/Loading/Loading";

const PetListing = () => {
    const [nonAdoptedPet, setNonAdoptedPet] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/petsNonAdopted?page=${page}`)
        .then(res => res.json())
        .then(data =>{
            setNonAdoptedPet(prePet => [...prePet, ...data])
            setLoading(false)
        })
    }, [page])
    console.log(nonAdoptedPet);

    const handleInfiniteScroll = async() =>{
        console.log('scrollHeight' + document.documentElement.scrollHeight);
        console.log('innerHeight' + window.innerHeight);
        console.log('scrollTop' + document.documentElement.scrollTop);
        try{
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
                setLoading(true)
                setPage(prevPage => prevPage + 1)
            }

        }catch(error){
            console.log(error);
        }
    };

    useEffect(() =>{
        window.addEventListener("scroll", handleInfiniteScroll)
        return () => window.removeEventListener("scroll", handleInfiniteScroll)
    },[])

    return (
        <div>
           <div>
           <PetListingBanner></PetListingBanner>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
                {
                    nonAdoptedPet.map(pet => <DisplayPetListing
                    key={pet._id}
                    nonAdopted={pet}
                    ></DisplayPetListing>)
                }
               
            </div>
           <div className="">
           {
                loading && <Loading/>
            }
           </div>
        </div>
    );
};

export default PetListing;