import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HomeIcon,
  BellIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
  HelpCircleIcon,
  ArrowLeft,
  ChevronRight,
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
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isHomePage = location.pathname === '/';
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsCollapsed(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
    setIsSearchExpanded(false);
    setSearchTerm('');
  };

  return (
    <header className={`bg-background text-foreground shadow-sm sticky top-0 z-50 transition-all duration-300 ${isCollapsed ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-2 lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className={`text-2xl font-bold text-foreground mr-4 transition-all duration-300 ${isCollapsed ? 'text-xl' : 'text-2xl'}`}>
              Loyalty App
            </Link>
            {!isHomePage && (
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            )}
          </div>
          <nav className="hidden lg:flex items-center space-x-4">
            <Link to="/"><Button variant="ghost"><HomeIcon className="h-4 w-4 mr-2" />Home</Button></Link>
            <Link to="/notifications"><Button variant="ghost"><BellIcon className="h-4 w-4 mr-2" />Notifications</Button></Link>
            <Link to="/favorites"><Button variant="ghost"><StarIcon className="h-4 w-4 mr-2" />Favorites</Button></Link>
            <Link to="/help-support"><Button variant="ghost"><HelpCircleIcon className="h-4 w-4 mr-2" />Help</Button></Link>
          </nav>
          <div className="flex items-center space-x-4">
            <AnimatePresence>
              {isSearchExpanded ? (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSearchSubmit}
                  className="flex items-center"
                >
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                  <Button type="submit" variant="ghost" size="icon" className="ml-2">
                    <SearchIcon className="h-5 w-5" />
                  </Button>
                </motion.form>
              ) : (
                <Button variant="ghost" size="icon" onClick={handleSearchClick}>
                  <SearchIcon className="h-5 w-5" />
                </Button>
              )}
            </AnimatePresence>
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar>
                    <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                    <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="flex items-center">
                    <HelpCircleIcon className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="ghost" className="w-full justify-start text-red-500">
                    <X className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {!isCollapsed && (
          <div className="mt-2">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-foreground hover:text-foreground/80">
                    <HomeIcon className="h-4 w-4 mr-2" />
                    Home
                  </Link>
                </li>
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li key={name}>
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-foreground/60" />
                        <Link
                          to={routeTo}
                          className={`ml-1 md:ml-2 text-sm font-medium ${
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
