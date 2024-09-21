import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Notifications from "./pages/Notifications.jsx";
import Search from "./pages/Search.jsx";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";
import HelpSupport from "./pages/HelpSupport.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Notifications",
    to: "/notifications",
    icon: <BellIcon className="h-4 w-4" />,
    page: <Notifications />,
  },
  {
    title: "Search",
    to: "/search",
    icon: <SearchIcon className="h-4 w-4" />,
    page: <Search />,
  },
  {
    title: "Favorites",
    to: "/favorites",
    icon: <StarIcon className="h-4 w-4" />,
    page: <Favorites />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Profile />,
  },
  {
    title: "Help & Support",
    to: "/help-support",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <HelpSupport />,
  },
];
