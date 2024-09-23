import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon, ChevronLeft, X, Sun, Moon } from "lucide-react";

const SideNav = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();
  const location = useLocation();
  const sideNavRef = useRef(null);

  const navItems = [
    { 
      icon: <HomeIcon className="h-4 w-4 ml-2" />, 
      label: 'الرئيسية', 
      to: '/',
      subItems: []
    },
    { 
      icon: <SearchIcon className="h-4 w-4 ml-2" />, 
      label: 'البحث', 
      to: '/search',
      subItems: [
        { label: 'المتاجر', to: '/search/shops' },
        { label: 'العروض', to: '/search/offers' }
      ]
    },
    { 
      icon: <BellIcon className="h-4 w-4 ml-2" />, 
      label: 'الإشعارات', 
      to: '/notifications',
      subItems: []
    },
    { 
      icon: <StarIcon className="h-4 w-4 ml-2" />, 
      label: 'المفضلة', 
      to: '/favorites',
      subItems: []
    },
    { 
      icon: <UserIcon className="h-4 w-4 ml-2" />, 
      label: 'الملف الشخصي', 
      to: '/profile',
      subItems: []
    },
    { 
      icon: <HelpCircleIcon className="h-4 w-4 ml-2" />, 
      label: 'المساعدة', 
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

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const sideNavVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  const overlayVariants = {
    open: { opacity: 1, pointerEvents: 'auto' },
    closed: { opacity: 0, pointerEvents: 'none' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={onClose}
          />
          <motion.nav
            ref={sideNavRef}
            className="bg-white dark:bg-gray-800 shadow-sm w-64 h-screen fixed right-0 top-0 overflow-y-auto z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideNavVariants}
            dir="rtl"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">تطبيق الولاء</h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <Avatar>
                  <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                  <AvatarFallback>{user?.name?.charAt(0) || 'م'}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{user?.name || 'المستخدم'}</p>
                  <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>
                </div>
              </div>

              <Input
                type="text"
                placeholder="البحث في القائمة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
              />

              <Accordion type="single" collapsible className="space-y-2">
                {filteredNavItems.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                      <Link to={item.to} className="flex items-center w-full" onClick={onClose}>
                        {item.icon}
                        {item.label}
                      </Link>
                    </AccordionTrigger>
                    {item.subItems.length > 0 && (
                      <AccordionContent>
                        <ul className="mr-6 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.to}
                                className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 transition-colors"
                                onClick={onClose}
                              >
                                <ChevronLeft className="h-3 w-3 ml-2" />
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
                  {theme === 'light' ? <Moon className="h-4 w-4 ml-2" /> : <Sun className="h-4 w-4 ml-2" />}
                  {theme === 'light' ? 'الوضع الداكن' : 'الوضع الفاتح'}
                </Button>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
