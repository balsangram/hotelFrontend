import React, { useState } from 'react';
import BookingList from '../Bookings/BookingList';
import AdminHotel from '../Hotels/AdminHotel';
import HotelDetail from '../Hotels/HotelDetail';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('bookingList');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'bookingList':
        return <BookingList />;
      case 'hotelList':
        return <AdminHotel />;
        case 'hotelDetail':
        return <HotelDetail />;
    //   default:
    //     return <BookingList />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-1/4' : 'w-16'
        } bg-gray-800 text-white p-4 transition-all duration-300`}
      >
        <button
          onClick={toggleSidebar}
          className="mb-4 focus:outline-none"
        >
          {isSidebarOpen ? 'Collapse' : 'Expand'}
        </button>
        {isSidebarOpen && (
          <>
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            <ul>
              <li>
                <button
                  onClick={() => setActiveComponent('bookingList')}
                  className={`w-full text-left py-2 px-4 rounded ${
                    activeComponent === 'bookingList' ? 'bg-gray-700' : ''
                  }`}
                >
                  Booking List
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent('hotelList')}
                  className={`w-full text-left py-2 px-4 rounded ${
                    activeComponent === 'hotelList' ? 'bg-gray-700' : ''
                  }`}
                >
                  Hotel List
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent('hotelDetail')}
                  className={`w-full text-left py-2 px-4 rounded ${
                    activeComponent === 'hotelDetail' ? 'bg-gray-700' : ''
                  }`}
                >
                  Add Hotel
                </button>
              </li>
            </ul>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">{renderComponent()}</div>
    </div>
  );
};

export default AdminDashboard;
