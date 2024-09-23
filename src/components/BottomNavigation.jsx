import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bell, User, MoreHorizontal, Grid } from 'lucide-react';
import { motion } from 'framer-motion';
import QuickAccessPopup from './QuickAccessPopup';

const BottomNavigation = () => {
  const location = useLocation();
  const [isQuickAccessOpen, setIsQuickAccessOpen] = useState(false);

  const navItems = [
    { icon: Home, path: '/' },
    { icon: Search, path: '/search' },
    { icon: Bell, path: '/notifications' },
    { icon: User, path: '/profile' },
    { icon: Grid, path: '#', onClick: () => setIsQuickAccessOpen(true) },
    { icon: MoreHorizontal, path: '/more' },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 fixed bottom-0 left-0 right-0 z-50" dir="rtl">
        <div className="flex justify-around items-center h-16">
          {navItems.map(({ icon: Icon, path, onClick }, index) => (
            <Link
              key={index}
              to={path}
              className={`flex items-center justify-center w-full h-full ${
                location.pathname === path ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={onClick}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6" />
              </motion.div>
              {location.pathname === path && (
                <motion.div
                  className="absolute bottom-0 right-0 left-0 h-0.5 bg-primary"
                  layoutId="bottomNavIndicator"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
      <QuickAccessPopup isOpen={isQuickAccessOpen} onClose={() => setIsQuickAccessOpen(false)} />
    </>
  );
};

export default BottomNavigation;
