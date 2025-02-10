import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner.mp4';
import Hotelimg from '../../assets/hotel.jpg'; // Placeholder image for hotels
import { useAuth } from '../context/AuthContext';

function HomePage() {
  const {userInfo} = useAuth();
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();
  // const token = localStorage.getItem('authToken');

  useEffect(() => {
    const displayHotels = async () => {
      try {
        const result = await axios.get(`http://localhost:8000/displayhotel/${userInfo.token}`);
        setHotels(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    displayHotels();
  }, []);

  const onBookNow = (hotelId) => {
    // Implement booking logic here
    console.log(`Booking hotel with ID: ${hotelId}`);
  };

  const handleShowMore = () => {
    navigate('/HotelList');
  };

  return (
    <div>
      {/* Video Banner with Overlay */}
      <div className="relative h-[95vh]">
        <video
          src={banner}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
            Welcome to Our Hotels
          </h1>
        </div>
      </div>

      {/* Hotel List */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Hotel List</h1>
        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hotels.slice(0, 4).map((hotel) => (
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
                    onClick={() => onBookNow(hotel.id)}
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
        {hotels.length > 4 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
