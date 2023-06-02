import React from "react";
import SectionTitle from "../../../../components/SectionTitle";

const AddItem = () => {
  return (
    <div>
      <SectionTitle
        header={"what is new"}
        title={"want to add new food?"}
        subtitle={"add new one"}
      ></SectionTitle>
      <form className="w-9/12 mx-auto text-center">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Food name</span>
          </label>
          <input
            type="text"
            placeholder="new food"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose Category</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
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
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="description"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick a file</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
