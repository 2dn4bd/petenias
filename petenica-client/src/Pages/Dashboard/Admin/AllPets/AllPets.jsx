import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
const AllPets = () => {
    const axiosPrivate = useAxiosPrivate()
    const {data: pets =[], refetch} = useQuery({
        queryKey:['petsdatas'],
        queryFn: async () =>{
            const res = await axiosPrivate.get("http://localhost:5000/allpets")
            return res.data
        }
    })
    const handleDelete = (pet) =>{
        Swal.fire({
            title: "Are you sure to delete this Pet?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                    axiosPrivate.delete(`/allpets/${pet._id}`)
                    .then(res =>{
                        if(res.data.deletedCount > 0){
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleChangleStatus = (id) =>{
        const update ={
            adopted: 'true'
        }
        axiosPrivate.put(`/status/${id}`, update)
        .then(res =>{
            refetch()
            console.log(res.data);
        })
    }
    return (
        <div className="border m-10">
        <div className="flex items-center text-3xl justify-evenly py-5 border-b">
            <h2 className="">
                Total Pets: {pets.length}
            </h2>
        </div>

        <div className="overflow-x-auto">
<table className="table table-zebra">
{/* head */}
<thead className="bg-[#0D9488] text-white text-center">
  <tr>
    <th>#</th>
    <th>Image</th>
    <th>Name</th>
    <th>pet’s status</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody className="text-center">
        {
            pets.map((pet, index) =><tr key={pet._id}>
                <th>{index + 1}</th>
                <td className="flex justify-center"><img className="rounded-full w-[80px]" src={pet.pet_image} alt="" /></td>
                <td>{pet.pet_name}</td>
                <td>
               {
                pet.adopted === 'false' ?  <button onClick={() =>handleChangleStatus(pet._id)} className="btn btn-ghost btn-md bg-[#0D9488] hover:bg-[#034d46] text-white">
                {pet.adopted === 'false'  ? 'Not Adopted' : 'Adopted' }
                </button>  :  <button disabled  onClick={() =>handleChangleStatus(pet._id)} className="btn btn-ghost btn-md bg-[#0D9488] hover:bg-[#034d46]   text-white">
                {pet.adopted === 'false'  ? 'Not Adopted' : 'Adopted' }
                </button>
               }
                </td>
                <td>
                <Link to={`dashboard/updatepet/${pet._id}`}>
                <button  className="btn btn-ghost btn-md bg-[#0D9488] hover:bg-[#034d46]"><MdUpdate className="text-white text-xl"></MdUpdate>
                </button>
                </Link>
                </td>
                <td>
                {
                    pet.role === 'admin' ? <button disabled onClick={()=>handleDelete(pet)}  className="btn btn-ghost btn-md bg-red-500 hover:bg-red-600 "><FaTrashAlt className="text-white"></FaTrashAlt>
                    </button> 
                    
                    : <button onClick={()=>handleDelete(pet)}  className="btn btn-ghost btn-md  bg-red-500 hover:bg-red-600 "><FaTrashAlt className="text-white"></FaTrashAlt>
                </button>
                }
                </td>
              </tr>)
        }
</tbody>
</table>
</div>

    </div>
    );
};

export default AllPets;