import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon, ArrowLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 mr-4">
              Loyalty App
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/"><Button variant="ghost"><HomeIcon className="h-4 w-4 mr-2" />Home</Button></Link></li>
              <li><Link to="/search"><Button variant="ghost"><SearchIcon className="h-4 w-4 mr-2" />Search</Button></Link></li>
              <li><Link to="/notifications"><Button variant="ghost"><BellIcon className="h-4 w-4 mr-2" />Notifications</Button></Link></li>
              <li><Link to="/favorites"><Button variant="ghost"><StarIcon className="h-4 w-4 mr-2" />Favorites</Button></Link></li>
              <li><Link to="/profile"><Button variant="ghost"><UserIcon className="h-4 w-4 mr-2" />Profile</Button></Link></li>
              <li><Link to="/help-support"><Button variant="ghost"><HelpCircleIcon className="h-4 w-4 mr-2" />Help</Button></Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
