import React, { useEffect, useState } from 'react'
import axios from "axios";
import Hotelimg from '../../assets/hotel.jpg';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function HotelList() {
  const navigate = useNavigate();
  const {userInfo} = useAuth();
  const [hotels , setHotels] = useState([])
  // const token = localStorage.getItem("authToken") 
  function displayHotels() { axios.get(`https://hotelbackend-1-qg3z.onrender.com/displayhotel/${userInfo.token}`).then((result)=>{
    setHotels(result.data.data)
    console.log(result.data.data)})
    .catch((error)=>{
      console.log(error);
    })
  }
  function bookingHotel(hotelId){
  
    axios.post(`https://hotelbackend-1-qg3z.onrender.com/addbooking`,{hotelId , token : userInfo.token , date : Date.now()}).then((result) =>{
      navigate("/")
      console.log(result);
    }) .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    displayHotels()
  },[])

  return (
   <>
         <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hotel List</h1>
      {hotels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={hotel.imageUrl || Hotelimg}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-gray-600">Rooms Available: {hotel.roomAvailable}</p>
                <p className="text-gray-800 font-bold">Price: ₹{hotel.price}</p>
                <button
                  onClick={() => bookingHotel(hotel._id)}
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hotels available.</p>
      )}
    </div>
   </>
  )
}

export default HotelList