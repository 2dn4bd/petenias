import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import DisplayDonationCampaign from "../DisplayDonationCampaign/DisplayDonationCampaign";

const DonationCampaign = () => {
    const [donattionCampaign, setdonattionCampaign] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/alldonate?page=${page}`)
        .then(res => res.json())
        .then(data =>{
            setdonattionCampaign(prePet => [...prePet, ...data])
            setLoading(false)
        })
    }, [page])
    console.log(donattionCampaign);

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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
                {
                    donattionCampaign.map(campaign => <DisplayDonationCampaign
                    key={campaign.Id}
                    campainDisplay={campaign}
                    ></DisplayDonationCampaign>)
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

export default DonationCampaign;