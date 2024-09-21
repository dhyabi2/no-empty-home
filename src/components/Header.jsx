import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon, ArrowLeft, ChevronRight } from "lucide-react";
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isHomePage = location.pathname === '/';

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
          <nav className="flex items-center">
            <ul className={`flex space-x-4 transition-all duration-300 ${isCollapsed ? 'hidden sm:flex' : ''}`}>
              <li><Link to="/"><Button variant="ghost"><HomeIcon className="h-4 w-4 mr-2" />Home</Button></Link></li>
              <li><Link to="/notifications"><Button variant="ghost"><BellIcon className="h-4 w-4 mr-2" />Notifications</Button></Link></li>
              <li><Link to="/favorites"><Button variant="ghost"><StarIcon className="h-4 w-4 mr-2" />Favorites</Button></Link></li>
              <li><Link to="/profile"><Button variant="ghost"><UserIcon className="h-4 w-4 mr-2" />Profile</Button></Link></li>
              <li><Link to="/help-support"><Button variant="ghost"><HelpCircleIcon className="h-4 w-4 mr-2" />Help</Button></Link></li>
            </ul>
            <div className="ml-4 relative">
              <Button variant="ghost" size="icon" onClick={handleSearchClick}>
                <SearchIcon className="h-5 w-5" />
              </Button>
              {isSearchExpanded && (
                <form onSubmit={handleSearchSubmit} className="absolute right-0 top-full mt-2 bg-background shadow-md rounded-md p-2">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                </form>
              )}
            </div>
            <ThemeToggle />
          </nav>
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
