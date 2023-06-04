import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imageKey=import.meta.env.VITE_imgbb_secret
const AddItem = () => {
  const { register, handleSubmit, reset} = useForm();
  const[axiosSecure]=useAxiosSecure()
  const hostingUrl=`https://api.imgbb.com/1/upload?key=${imageKey}`

  const addItem=data=>{
    const formData=new FormData()
    formData.append('image', data.image[0])
   
    fetch(hostingUrl,{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(imgRes=>{
      if(imgRes.success){
        const imgUrl=imgRes.data.display_url
        const {name, image,details,recipe,price }=data
        const newFood={name, image:imgUrl,details,recipe,price}
        axiosSecure.post('/menus',newFood)
        .then(data=>{
          if(data.data.insertedId){
            reset()
            Swal.fire({
              icon: 'success',
              title: 'New Food has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })

   

  }
  return (
    <div>
      <SectionTitle
        header={"what is new"}
        title={"want to add new food?"}
        subtitle={"add new one"}
      ></SectionTitle>
      <form  onSubmit={handleSubmit(addItem)} className="w-9/12 mx-auto text-center bg-gray-100 p-8">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Food name</span>
          </label>
          <input
            type="text"
            placeholder="new food"
            className="input input-bordered w-full "
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose Category</span>
            </label>
            <select defaultValue={'pick one'} {...register("category", { required: true })} className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option></option>
              <option>Chicken</option>
              <option>Beef</option>
              <option>Dessert</option>
              <option>Pasta</option>
              <option>Seafood</option>
              <option>Vegeterian</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered "
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Description</span>
          </label>
          <textarea
           {...register("details", { required: true, maxLength:100 })}
            className="textarea textarea-bordered h-24"
            placeholder="description"
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe</span>
          </label>
          <textarea
           {...register("recipe", { required: true, maxLength:100 })}
            className="textarea textarea-bordered h-24"
            placeholder="how it is made"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick a file</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image", { required: true})}
          />
        </div>
        <div className="form-control">
       <input type="submit" value="Add Item" className="btn border-none bg-yellow-500 hover:bg-yellow-600 my-8" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
