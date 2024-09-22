import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon, ShoppingBagIcon, TagIcon, HistoryIcon, MessageSquare, Heart, Award, Gift, Calendar, MapPin, Camera, Bookmark, Edit, Zap, Cake, Share2, Grid } from "lucide-react";
import Index from "./pages/Index.jsx";
import Notifications from "./pages/Notifications.jsx";
import Search from "./pages/Search.jsx";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";
import HelpSupport from "./pages/HelpSupport.jsx";
import ShopListing from "./pages/ShopListing.jsx";
import ShopProfile from "./pages/ShopProfile.jsx";
import OfferListing from "./pages/OfferListing.jsx";
import OfferDetail from "./pages/OfferDetail.jsx";
import RedeemPoints from "./pages/RedeemPoints.jsx";
import PointsHistory from "./pages/PointsHistory.jsx";
import Feedback from "./pages/Feedback.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import RewardGiftingPage from "./pages/RewardGiftingPage.jsx";
import ExclusiveEvents from "./pages/ExclusiveEvents.jsx";
import NearbyOffers from "./pages/NearbyOffers.jsx";
import ScanReceipt from "./pages/ScanReceipt.jsx";
import FavoriteShops from "./pages/FavoriteShops.jsx";
import RewardCustomization from "./pages/RewardCustomization.jsx";
import FlashSales from "./pages/FlashSales.jsx";
import BirthdayRewards from "./pages/BirthdayRewards.jsx";
import RewardSharing from "./pages/RewardSharing.jsx";
import RewardCategories from "./pages/RewardCategories.jsx";

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
  {
    title: "Shops",
    to: "/shops",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <ShopListing />,
  },
  {
    title: "Shop Profile",
    to: "/shops/:id",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <ShopProfile />,
  },
  {
    title: "Offers",
    to: "/offers",
    icon: <TagIcon className="h-4 w-4" />,
    page: <OfferListing />,
  },
  {
    title: "Offer Detail",
    to: "/offers/:id",
    icon: <TagIcon className="h-4 w-4" />,
    page: <OfferDetail />,
  },
  {
    title: "Redeem Points",
    to: "/redeem-points",
    icon: <StarIcon className="h-4 w-4" />,
    page: <RedeemPoints />,
  },
  {
    title: "Points History",
    to: "/points-history",
    icon: <HistoryIcon className="h-4 w-4" />,
    page: <PointsHistory />,
  },
  {
    title: "Feedback",
    to: "/feedback",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <Feedback />,
  },
  {
    title: "Wishlist",
    to: "/wishlist",
    icon: <Heart className="h-4 w-4" />,
    page: <Wishlist />,
  },
  {
    title: "Leaderboard",
    to: "/leaderboard",
    icon: <Award className="h-4 w-4" />,
    page: <Leaderboard />,
  },
  {
    title: "Reward Gifting",
    to: "/reward-gifting",
    icon: <Gift className="h-4 w-4" />,
    page: <RewardGiftingPage />,
  },
  {
    title: "Exclusive Events",
    to: "/exclusive-events",
    icon: <Calendar className="h-4 w-4" />,
    page: <ExclusiveEvents />,
  },
  {
    title: "Nearby Offers",
    to: "/nearby-offers",
    icon: <MapPin className="h-4 w-4" />,
    page: <NearbyOffers />,
  },
  {
    title: "Scan Receipt",
    to: "/scan-receipt",
    icon: <Camera className="h-4 w-4" />,
    page: <ScanReceipt />,
  },
  {
    title: "Favorite Shops",
    to: "/favorite-shops",
    icon: <Bookmark className="h-4 w-4" />,
    page: <FavoriteShops />,
  },
  {
    title: "Reward Customization",
    to: "/reward-customization",
    icon: <Edit className="h-4 w-4" />,
    page: <RewardCustomization />,
  },
  {
    title: "Flash Sales",
    to: "/flash-sales",
    icon: <Zap className="h-4 w-4" />,
    page: <FlashSales />,
  },
  {
    title: "Birthday Rewards",
    to: "/birthday-rewards",
    icon: <Cake className="h-4 w-4" />,
    page: <BirthdayRewards />,
  },
  {
    title: "Reward Sharing",
    to: "/reward-sharing",
    icon: <Share2 className="h-4 w-4" />,
    page: <RewardSharing />,
  },
  {
    title: "Reward Categories",
    to: "/reward-categories",
    icon: <Grid className="h-4 w-4" />,
    page: <RewardCategories />,
  },
];
