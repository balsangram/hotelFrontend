import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Submitting the form", data);
    axios
      .post("http://localhost:8000/registration", data)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "At least 3 characters required" },
              })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters required" },
              })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
