import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom'

function BookingList() {
  const [bookings , setBookings] = useState([])
  const {userInfo} = useAuth();
  // const token = localStorage.getItem("authToken") 
  // console.log(token);
  
  function displayBooking() { axios.get(`https://hotelbackend-1-qg3z.onrender.com/displaybooking/${userInfo.token}` ).then((result)=>{
    setBookings(result.data.data)
    console.log(result.data.data);
  })
    .catch((error)=>{
      console.log(error);
    })
  }

  function deleteBooking(booking) {
    axios
      .delete(`https://hotelbackend-1-qg3z.onrender.com/deletebooking/${booking._id}/${userInfo.token}`)
      .then((result) => {
        console.log(result);
        setBookings((prevBookings) =>
          prevBookings.filter((b) => b._id !== booking._id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(()=>{
    displayBooking()
  },[])
  return (
    <>
<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking List</h1>
      {bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">User Name</th>
                <th className="py-2 px-4 border-b">Hotel Name</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{booking.userId.name}</td>
                  <td className="py-2 px-4 border-b">{(booking.hotelId || {}).name || "KALINGA"}</td>

                  <td className="py-2 px-4 border-b">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                  {/* <Link
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600"
                        to="/ManageHotel"
                        state={{
                          userId: booking._id,
                          userName: booking.userId.name,
                          hotelName: booking.hotelId.name,
                          date: Date(booking.date),
                        }}
                      >
                        Edit
                      </Link> */}
                  <button
                    onClick={()=>
                      deleteBooking(booking)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                    >
                    Delete
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No bookings available.</p>
      )}
    </div>
    </>
  )
}

export default BookingList