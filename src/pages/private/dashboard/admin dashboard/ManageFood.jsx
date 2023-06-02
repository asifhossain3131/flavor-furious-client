import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import useFoods from '../../../../hooks/useFoods';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';


const ManageFood = () => {
    const[menus, ,refetch]=useFoods()
    const[axiosSecure]=useAxiosSecure()
    console.log(menus)
    
    const hanldeDelete=id=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "The food will be deleted permanantly",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/menu/${id}`)
          .then(res=>{
            refetch()
            Swal.fire(
              'Deleted!',
              'Food has been deleted.',
              'success'
            )
          })
        }
      })
    }

    const updateFood=id=>{
    
    }
    return (
        <div>
            <SectionTitle
             header={'managing food'}
             title={'want to update a food?'}
             subtitle={'or delete one?'}
            ></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
      menus?.map((menu,i)=>
        <tr key={menu._id}>
          <td>{i+1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={menu.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{menu.name}</div>
            </div>
          </div>
        </td>
        <td>
          {menu.price}
        </td>
        <td>
        <button onClick={()=>updateFood(menu._id)} className="btn btn-square border-none bg-yellow-500 hover:bg-yellow-600"><FaPencilAlt></FaPencilAlt></button>
          </td>
          <td><button onClick={()=>hanldeDelete(menu._id)} className="btn btn-square bg-red-500 border-none hover:bg-red-400">
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

export default ManageFood;