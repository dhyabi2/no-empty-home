import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, User, MoreHorizontal, Plus, QrCode, Camera, Gift, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

  const navItems = [
    { icon: Home, path: '/' },
    { icon: Search, path: '/search' },
    { icon: User, path: '/profile' },
    { icon: MoreHorizontal, path: '/more' },
  ];

  const quickActions = [
    { icon: QrCode, label: "مسح رمز QR", onClick: () => navigate('/scan-qr') },
    { icon: Camera, label: "التقاط صورة", onClick: () => navigate('/capture-photo') },
    { icon: Gift, label: "استبدال", onClick: () => navigate('/redeem') },
    { icon: MapPin, label: "تسجيل الدخول", onClick: () => navigate('/check-in') },
  ];

  const toggleQuickActions = () => setIsQuickActionsOpen(!isQuickActionsOpen);

  return (
    <nav className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 fixed bottom-0 left-0 right-0 z-50" dir="rtl">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center justify-center w-full h-full ${
              location.pathname === path ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
            }`}
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
        <div className="relative">
          <Button
            className="rounded-full p-2"
            onClick={toggleQuickActions}
          >
            <Plus className="h-6 w-6" />
          </Button>
          <AnimatePresence>
            {isQuickActionsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-full mb-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 w-48"
              >
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      className="w-full flex justify-start items-center space-x-2 mb-2"
                      variant="ghost"
                      onClick={() => {
                        action.onClick();
                        setIsQuickActionsOpen(false);
                      }}
                    >
                      <action.icon className="h-4 w-4" />
                      <span>{action.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
