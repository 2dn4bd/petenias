import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
const AllUsers = () => {
    const axiosPrivate = useAxiosPrivate()
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async() =>{
            const res = await axiosPrivate.get('/users',)
            return res.data
        }
    })
    const handleMakeAdmin = (user) =>{
        Swal.fire({
            title: "Are you sure to make admin this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.patch(`/users/admin/${user._id}`)
                    .then(res =>{
                        if(res.data.modifiedCount > 0){
                            refetch()
                            Swal.fire({
                                title: "Promoted!",
                                text: `${user.name} is Admin`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleDelete = (user) =>{
        Swal.fire({
            title: "Are you sure to delete this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                    axiosPrivate.delete(`/users/${user._id}`)
                    .then(res =>{
                        if(res.data.deletedCount > 0){
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="border m-10">
        <div className="flex items-center text-3xl justify-evenly py-5 border-b">
            <h2 className="">
                All Users: 
            </h2>
            <h2 className="">
                Total Users: {users.length}
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
    <th>Email</th>
    <th>Role</th>
    <th>Action</th>
  </tr>
</thead>
<tbody className="text-center">
        {
            users.map((user, index) =><tr key={user._id}>
                <th>{index + 1}</th>
                <td className="flex justify-center"><img className="rounded-full w-10" src={user.photo} alt="" /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
               { user.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-md bg-[#0D9488] hover:bg-[#034d46]"><MdAdminPanelSettings className="text-white text-xl"></MdAdminPanelSettings>
                </button>}
                </td>
                <td>
                {
                    user.role === 'admin' ? <button disabled onClick={()=>handleDelete(user)}  className="btn btn-ghost btn-md bg-red-500 hover:bg-red-600 "><FaTrashAlt className="text-white"></FaTrashAlt>
                    </button> 
                    
                    : <button onClick={()=>handleDelete(user)}  className="btn btn-ghost btn-md bg-red-500 hover:bg-red-600 "><FaTrashAlt className="text-white"></FaTrashAlt>
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

export default AllUsers;