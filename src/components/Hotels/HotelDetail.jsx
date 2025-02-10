import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

// import axios from "axios";
function HotelDetail() {
  const {userInfo} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state.userId);
  // const token = localStorage.getItem("authToken");
  // const id = location.state.userId;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      console.log("Submitting the form", data);
      const response = await axios.post(
        `https://hotelbackend-1-qg3z.onrender.com/addhotel `,{token : userInfo.token, ...data}
       
      );
      console.log(response.data);
      // Redirect or show success message as needed
      navigate("/");
    } catch (error) {
      console.error("Error updating hotel:", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="w-96">
      <h1 className="text-2xl font-bold mb-6">Add Hotel</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Hotel Name Input */}
        <div>
          <label className="block text-gray-700 font-medium">Hotel Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Location Input */}
        <div>
          <label className="block text-gray-700 font-medium">Location</label>
          <input
            type="text"
            {...register("location")}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Rooms Available Input */}
        <div>
          <label className="block text-gray-700 font-medium">
            Rooms Available
          </label>
          <input
            type="number"
            {...register("roomAvailable")}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Price Input */}
        <div>
          <label className="block text-gray-700 font-medium">
            Price per Night (₹)
          </label>
          <input
            type="number"
            {...register("price")}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Update Hotel
        </button>
      </form>
    </div>
  )
}

export default HotelDetail;