import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon } from "lucide-react";

const SideNav = () => {
  const navItems = [
    { icon: <HomeIcon className="h-4 w-4 mr-2" />, label: 'Home', to: '/' },
    { icon: <SearchIcon className="h-4 w-4 mr-2" />, label: 'Search', to: '/search' },
    { icon: <BellIcon className="h-4 w-4 mr-2" />, label: 'Notifications', to: '/notifications' },
    { icon: <StarIcon className="h-4 w-4 mr-2" />, label: 'Favorites', to: '/favorites' },
    { icon: <UserIcon className="h-4 w-4 mr-2" />, label: 'Profile', to: '/profile' },
    { icon: <HelpCircleIcon className="h-4 w-4 mr-2" />, label: 'Help', to: '/help-support' },
  ];

  return (
    <nav className="bg-white shadow-sm w-64 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Loyalty App</h2>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;