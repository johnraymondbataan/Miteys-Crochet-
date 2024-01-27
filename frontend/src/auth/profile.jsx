import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="items-end justify-end  bottom-5 right-16 absolute inline-block">
      <button onClick={toggleDropdown} className="text-sm font-medium focus:outline text-transparent">
      <FaRegUserCircle className="h-9 w-9 " />
      </button>

      {isOpen && (
        <div className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Profile
            </a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Settings
            </a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;