import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  BellIcon,
  UserIcon,
  HelpCircleIcon,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from './ThemeToggle';
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
  const isHomePage = location.pathname === '/';
  const { user } = useAuth();

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsCollapsed(scrollPosition > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
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
            <Link to="/notifications">
              <Button variant="ghost" size="icon">
                <BellIcon className="h-6 w-6" />
              </Button>
            </Link>
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
      </div>
    </header>
  );
};

export default Header;
