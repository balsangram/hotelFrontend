import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const {logout,userInfo} = useAuth();
  const navigate = useNavigate()
  return (
    
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
       
        <div className="text-lg font-bold text-white">
          <Link to="/">LOGO</Link>
        </div>
        <ul className="hidden md:flex space-x-6">
        {userInfo ? <>
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/HotelPage" className="text-white hover:text-gray-200">
              HOTEL
            </Link>
          </li>
{userInfo.role === true &&
          <li>
            <Link to="/AdminDashboard" className="text-white hover:text-gray-200">
              DASHBOARD
            </Link>
          </li>
 }
          <button onClick={()=>{
            logout()
            navigate("/")
          }}>Logout</button>
          </>
          :
          <li>
            <Link to="/login" className="text-white hover:text-gray-200" > 
              LOGIN
            </Link>

          </li>
        }
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
          
            onClick={() => {
              
              const menu = document.getElementById('mobile-menu');
              menu.classList.toggle('hidden');
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation Links */}
      <ul id="mobile-menu" className="md:hidden hidden">
        <li>
          <Link to="/" className="block text-white py-2 px-4 hover:bg-blue-700">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/HotelPage" className="block text-white py-2 px-4 hover:bg-blue-700">
            HOTEL
          </Link>
        </li>
        <li>
          <Link to="/AdminDashboard" className="block text-white py-2 px-4 hover:bg-blue-700">
            DASHBOARD
          </Link>
        </li>
        <li>
          <Link to="/login" className="block text-white py-2 px-4 hover:bg-blue-700">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
