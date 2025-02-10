import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-2xl font-bold">Your Company</h2>
            <p className="mt-2 text-gray-400">
              Providing quality services since 2025.
            </p>
          </div>
          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                {/* Replace with actual icons */}
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {/* Facebook Icon */}
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {/* Twitter Icon */}
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {/* Instagram Icon */}
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {/* LinkedIn Icon */}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
