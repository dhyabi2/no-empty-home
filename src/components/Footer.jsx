import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav>
          <ul className="flex justify-around">
            <li><Link to="/" className="flex flex-col items-center text-gray-600 hover:text-gray-900"><HomeIcon className="h-6 w-6" /><span className="text-xs mt-1">Home</span></Link></li>
            <li><Link to="/search" className="flex flex-col items-center text-gray-600 hover:text-gray-900"><SearchIcon className="h-6 w-6" /><span className="text-xs mt-1">Search</span></Link></li>
            <li><Link to="/notifications" className="flex flex-col items-center text-gray-600 hover:text-gray-900"><BellIcon className="h-6 w-6" /><span className="text-xs mt-1">Notifications</span></Link></li>
            <li><Link to="/favorites" className="flex flex-col items-center text-gray-600 hover:text-gray-900"><StarIcon className="h-6 w-6" /><span className="text-xs mt-1">Favorites</span></Link></li>
            <li><Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-gray-900"><UserIcon className="h-6 w-6" /><span className="text-xs mt-1">Profile</span></Link></li>
            <li><Link to="/help-support" className="flex flex-col items-center text-gray-600 hover:text-gray-900"><HelpCircleIcon className="h-6 w-6" /><span className="text-xs mt-1">Help</span></Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;