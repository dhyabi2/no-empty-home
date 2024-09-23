import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bell, User, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();
  const bottomNavRef = useRef(null);

  const navItems = [
    { icon: Home, path: '/', label: 'الرئيسية' },
    { icon: Search, path: '/search', label: 'البحث' },
    { icon: Bell, path: '/notifications', label: 'الإشعارات' },
    { icon: User, path: '/profile', label: 'الملف الشخصي' },
    { icon: MoreHorizontal, path: '/more', label: 'المزيد' },
  ];

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === bottomNavRef.current) {
          // Handle the resize here if needed
          console.log('Bottom navigation resized');
        }
      }
    });

    if (bottomNavRef.current) {
      resizeObserver.observe(bottomNavRef.current);
    }

    return () => {
      if (bottomNavRef.current) {
        resizeObserver.unobserve(bottomNavRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 fixed bottom-0 left-0 right-0 z-50" dir="rtl" ref={bottomNavRef}>
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, path, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center w-full h-full ${
              location.pathname === path ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{label}</span>
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
  );
};

export default BottomNavigation;
