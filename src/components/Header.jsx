import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  BellIcon,
  UserIcon,
  HelpCircleIcon,
  ArrowRight,
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '../contexts/AuthContext';

const Header = ({ onMenuClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isHomePage = location.pathname === '/';
  const { user } = useAuth();

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsCollapsed(scrollPosition > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className={`bg-background text-foreground shadow-sm sticky top-0 z-50 transition-all duration-300 ${isCollapsed ? 'py-2' : 'py-4'}`} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {!isHomePage && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBackClick}
                className="ml-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            <Link to="/" className={`text-2xl font-bold text-foreground transition-all duration-300 ${isCollapsed ? 'text-xl' : 'text-2xl'}`}>
              تطبيق الولاء
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar>
                    <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                    <AvatarFallback>{user?.name?.charAt(0) || 'م'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="flex items-center">
                    <UserIcon className="h-4 w-4 ml-2" />
                    الملف الشخصي
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="flex items-center">
                    <HelpCircleIcon className="h-4 w-4 ml-2" />
                    الإعدادات
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="ghost" className="w-full justify-start text-red-500">
                    <X className="h-4 w-4 ml-2" />
                    تسجيل الخروج
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {!isCollapsed && !isHomePage && (
          <div className="mt-2">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-foreground hover:text-foreground/80">
                    <HomeIcon className="h-4 w-4 ml-2" />
                    الرئيسية
                  </Link>
                </li>
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li key={name}>
                      <div className="flex items-center">
                        <ChevronLeft className="h-4 w-4 text-foreground/60" />
                        <Link
                          to={routeTo}
                          className={`mr-1 md:mr-2 text-sm font-medium ${
                            isLast ? 'text-foreground/60 cursor-default' : 'text-foreground hover:text-foreground/80'
                          }`}
                          aria-current={isLast ? 'page' : undefined}
                        >
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
