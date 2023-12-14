import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";
const MyDonationCampaign = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {data: donate_campaign =[], refetch} = useQuery({
        queryKey:['petsdatas'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`http://localhost:5000/mydonationcamp/${user.email}`)
            return res.data
        }
    })
    const handleChangleStatus =() =>{
        refetch()
    }

    return (
        <div className="border m-10">
        <div className="flex items-center text-3xl justify-evenly py-5 border-b">
            <h2 className="">
                Total Pets: {donate_campaign.length}
            </h2>
        </div>

        <div className="overflow-x-auto">
<table className="table table-zebra">
{/* head */}
<thead className="bg-[#0D9488] text-white text-center">
  <tr>
    <th>#</th>
    <th>Pet Name</th>
    <th>Maximum Donation Amount</th>
    <th>donation progress bar</th>
    <th>Action</th>
  </tr>
</thead>
<tbody className="text-center">
        {
            donate_campaign.map((pet, index) =><tr key={pet._id}>
                <th>{index + 1}</th>
                <td>{pet.pet_name}</td>
                <td>
            {/* {
                pet.adopted === 'false' ?  <button onClick={() =>handleChangleStatus(pet._id)} className="btn btn-ghost btn-md bg-[#0D9488] hover:bg-[#034d46] text-white">
                {pet.adopted === 'false'  ? 'Not Adopted' : 'Adopted' }
                </button>  :  <button disabled  onClick={() =>handleChangleStatus(pet._id)} className="btn btn-ghost btn-md bg-[#0D9488] hover:bg-[#034d46]   text-white">
                {pet.adopted === 'false'  ? 'Not Adopted' : 'Adopted' }
                </button>
               } */}
               {pet.max_donate}
                </td>
                <td>
               progress bar 
                </td>
                <td>
                    <div>
                    <button onClick={() =>handleChangleStatus(pet._id)} className="btn btn-ghost btn-md bg-[#0D9488] hover:bg-[#034d46] text-white ">
                Pause
                </button >
                 <Link to={`dashboard/editDonate/${pet._id}`}>
                 <button  className="btn btn-ghost btn-md bg-[#0D9488] ml-2 hover:bg-[#034d46] text-white">
                Edit
                </button>
                </Link>
                <button className="btn btn-ghost btn-md bg-[#0D9488] ml-2 hover:bg-[#034d46] text-white">
                Donators
                </button>
                    </div>
                
                </td>
              </tr>)
        }
</tbody>
</table>
</div>

    </div>
    );
};

export default MyDonationCampaign;