import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useMemo } from "react";
const MyAddedPet =  () => {
    const {user} = useAuth()
    console.log(user?.email);
    const axiosPublic = useAxiosPublic()
    const {data: userAddedPet = []} = useQuery({
        queryKey:['userAdd'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/myaddedpet?email=${user?.email}`)
            return res.data
        }
    })
    console.log(userAddedPet);
    const data = useMemo(() => userAddedPet, [userAddedPet])
    // {
    //     "_id": "6563a06ee6c5877f8acec6a2",
    //     "category": "Dogs",
    //     "pet_name": "Buddy",
    //     "pet_image": "https://i.ibb.co/VvvMp1p/dog1.jpg",
    //     "pet_age": 3,
    //     "pet_location": "City Park",
    //     "short_description": "Friendly and active",
    //     "long_description": "Buddy is a playful dog who loves outdoor activities. Good with kids and other pets.",
    //     "adopted": "false"
    //     }
    /** @type import('@tanstack/react-query').columnDef<any> */
    const columns = [
        {
            header: 'Serial Number',
            accessorKey: 'serial_number'
            
        },
        {
            header: 'Pet Image',
            accessorKey:'pet_image',
        },
        {
            header: 'Pet Name',
            accessorKey:'pet_name'
            
        },
        {
            header: 'Pet Category',
            accessorKey:'category'
            
        },
        {
            header: 'Adoption Status',
            accessorKey:'adopted'
            
        
        }
    ]
    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel(),})
    return (
        <div className="ml-20 table border">
            <table className=" ">
                {table.getHeaderGroups().map(headerGroup =>(
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header =>(
                            <th className="border-b" key={header.id}> {flexRender(
                                header.column.columnDef.header, 
                                header.getContext()
                            )}</th>
                        ))}
                    </tr>
                ))}


                <tbody>
                    {table.getRowModel().rows.map(row =>
                        <tr key={row.id}>
                            {row.getVisibleCells().map( cell =>(
                                <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                            ))}
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default MyAddedPet;