import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon, ChevronRight, X, Sun, Moon } from "lucide-react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();

  const navItems = [
    { 
      icon: <HomeIcon className="h-4 w-4 mr-2" />, 
      label: 'Home', 
      to: '/',
      subItems: []
    },
    { 
      icon: <SearchIcon className="h-4 w-4 mr-2" />, 
      label: 'Search', 
      to: '/search',
      subItems: [
        { label: 'Shops', to: '/search/shops' },
        { label: 'Offers', to: '/search/offers' }
      ]
    },
    { 
      icon: <BellIcon className="h-4 w-4 mr-2" />, 
      label: 'Notifications', 
      to: '/notifications',
      subItems: []
    },
    { 
      icon: <StarIcon className="h-4 w-4 mr-2" />, 
      label: 'Favorites', 
      to: '/favorites',
      subItems: []
    },
    { 
      icon: <UserIcon className="h-4 w-4 mr-2" />, 
      label: 'Profile', 
      to: '/profile',
      subItems: []
    },
    { 
      icon: <HelpCircleIcon className="h-4 w-4 mr-2" />, 
      label: 'Help', 
      to: '/help-support',
      subItems: []
    },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const filteredNavItems = navItems.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subItems.some(subItem => subItem.label.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <motion.nav
      className={`bg-white dark:bg-gray-800 shadow-sm w-64 h-screen fixed left-0 top-0 overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      initial={false}
      animate={{ width: isOpen ? 256 : 0 }}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Loyalty App</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="lg:hidden">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-4 mb-6">
          <Avatar>
            <AvatarImage src={user?.avatarUrl} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{user?.name || 'User'}</p>
            <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>
          </div>
        </div>

        <Input
          type="text"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />

        <Accordion type="single" collapsible className="space-y-2">
          {filteredNavItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                <Link to={item.to} className="flex items-center w-full">
                  {item.icon}
                  {item.label}
                </Link>
              </AccordionTrigger>
              {item.subItems.length > 0 && (
                <AccordionContent>
                  <ul className="ml-6 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.to}
                          className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 transition-colors"
                        >
                          <ChevronRight className="h-3 w-3 mr-2" />
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-6">
          <Button variant="outline" onClick={toggleTheme} className="w-full">
            {theme === 'light' ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default SideNav;
