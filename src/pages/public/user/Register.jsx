import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import registration from "../../../../public/112454-form-registration.json";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-12 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2">
        <Lottie animationData={registration} loop={true} />
      </div>

      <div className="card  lg:w-1/2 shadow-xl bg-gray-100">
        <div className="card-body">
          <div className="my-4 space-y-2">
            <h1 className="font-bold text-3xl">Welcome</h1>
            <p className="font-semibold text-gray-600 text-xl">
              Register to explore!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                {...register("photo")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={() => handlePassCheck(e)}
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                {...register("confirm")}
                className="input input-bordered"
                required
              />
            </div>
            <span className="text-red-500">{error}</span>
            <span className="text-green-500">{success}</span>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Create an account"
                className="btn border-none bg-yellow-500 hover:bg-yellow-400 font-semibold"
              />
            </div>
          </form>
          <span className="text-gray-700 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
