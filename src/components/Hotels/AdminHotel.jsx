import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function AdminHotel() {
  const {userInfo} = useAuth();
  // const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  // console.log(hotels._id);
  
  // const token = localStorage.getItem("authToken");
  function displayHotels() {
    axios
      .get(`https://hotelbackend-1-qg3z.onrender.com/displayhotel/${userInfo.token}`)
      .then(result => {
        setHotels(result.data.data);
        console.log(result.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function deleteHotel(hotel){
    axios.delete(`https://hotelbackend-1-qg3z.onrender.com/deletehotel/${hotel._id}/${userInfo.token}`).then((result)=>{
      setHotels((prevBookings) =>
        prevBookings.filter((b) => b._id !== hotel._id)
      );
      console.log(result)}).catch((error)=>{
        console.log(error);
      })
  }

  useEffect(() => {
    displayHotels();  
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hotel List</h1>
      {hotels.length > 0
        ? <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Hotel Name</th>
                  <th className="py-2 px-4 border-b">Location</th>
                  <th className="py-2 px-4 border-b">Rooms Available</th>
                  <th className="py-2 px-4 border-b">Price (₹)</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((hotel, key )=>
                  <tr key={key} className="text-center">
                    <td className="py-2 px-4 border-b">
                      {hotel.name}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {hotel.location}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {hotel.roomAvailable}
                    </td>
                    <td className="py-2 px-4 border-b">
                      ₹{hotel.price}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <Link
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600"
                        to="/ManageHotel"
                        state={{
                          userId: hotel._id,
                          name: hotel.name,
                          location: hotel.location,
                          roomAvailable: hotel.roomAvailable,
                          price: hotel.price,
                          token: hotel.token
                        }}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={()=> 
                          deleteHotel(hotel)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        : <p>No hotels available.</p>}
    </div>
  );
}

export default AdminHotel;
