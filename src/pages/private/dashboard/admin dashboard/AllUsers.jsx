import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import { FaTrashAlt, FaUserCog } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2'


const AllUsers = () => {
  const[axiosSecure]=useAxiosSecure()
    const{data:users=[], refetch}=useQuery(['users'], async()=>{
        const res=await axiosSecure.get('/users')
        return res.data
    })

    const handleAdmin=id=>{
       fetch(`http://localhost:5000/user/${id}`,{
        method:'PATCH',
       })
       .then(res=>res.json())
       .then(data=>{
        refetch()
        toast.success('Admin created successfully')
       })
    }

    const hanldeDelete=id=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "The user will be deleted permanantly",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/user/${id}`)
          .then(res=>{
            refetch()
            Swal.fire(
              'Deleted!',
              'User has been deleted.',
              'success'
            )
          })
        }
      })
    }
    return (
        <div className='w-full text-center'>
          <SectionTitle
           title={'users are precious'}
           subtitle={'want to update users?'}
           header={'all users are here'}
          ></SectionTitle>

<div className="overflow-x-auto w-9/12 mx-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,i)=>
            <tr key={user._id}>
            <td>{i+1}</td>
           <td>{user.name}</td>
           <td>{user.email}</td>
           <td>{
            user.role==='admin'? 'admin' : <button onClick={()=>handleAdmin(user._id)} className="btn btn-square bg-yellow-500 border-none hover:bg-yellow-400">
            <FaUserCog></FaUserCog>
 </button>
            }</td>
<td><button onClick={()=>hanldeDelete(user._id)} className="btn btn-square bg-red-500 border-none hover:bg-red-400">
          <FaTrashAlt></FaTrashAlt>
</button></td>
         </tr>
            )
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;