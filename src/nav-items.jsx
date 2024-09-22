import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon, ShoppingBagIcon, TagIcon, HistoryIcon, MessageSquare, Heart, Award, Gift, Calendar, MapPin, Camera, Bookmark, Edit, Zap, Cake, Share2, Grid, Bolt, Package, ArrowRightLeft, Gavel, Handshake } from "lucide-react";
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
import PointBoosters from "./pages/PointBoosters.jsx";
import RewardBundles from "./pages/RewardBundles.jsx";
import PointTransfer from "./pages/PointTransfer.jsx";
import RewardAuctions from "./pages/RewardAuctions.jsx";
import SurpriseRewards from "./pages/SurpriseRewards.jsx";
import PartnerRewards from "./pages/PartnerRewards.jsx";

const createNavItem = (title, path, icon, component) => ({
  title,
  to: path,
  icon: <icon className="h-4 w-4" />,
  page: component,
});

export const navItems = [
  createNavItem("Home", "/", HomeIcon, <Index />),
  createNavItem("Notifications", "/notifications", BellIcon, <Notifications />),
  createNavItem("Search", "/search", SearchIcon, <Search />),
  createNavItem("Favorites", "/favorites", StarIcon, <Favorites />),
  createNavItem("Profile", "/profile", UserIcon, <Profile />),
  createNavItem("Help & Support", "/help-support", HelpCircleIcon, <HelpSupport />),
  createNavItem("Shops", "/shops", ShoppingBagIcon, <ShopListing />),
  createNavItem("Shop Profile", "/shops/:id", ShoppingBagIcon, <ShopProfile />),
  createNavItem("Offers", "/offers", TagIcon, <OfferListing />),
  createNavItem("Offer Detail", "/offers/:id", TagIcon, <OfferDetail />),
  createNavItem("Redeem Points", "/redeem-points", StarIcon, <RedeemPoints />),
  createNavItem("Points History", "/points-history", HistoryIcon, <PointsHistory />),
  createNavItem("Feedback", "/feedback", MessageSquare, <Feedback />),
  createNavItem("Wishlist", "/wishlist", Heart, <Wishlist />),
  createNavItem("Leaderboard", "/leaderboard", Award, <Leaderboard />),
  createNavItem("Reward Gifting", "/reward-gifting", Gift, <RewardGiftingPage />),
  createNavItem("Exclusive Events", "/exclusive-events", Calendar, <ExclusiveEvents />),
  createNavItem("Nearby Offers", "/nearby-offers", MapPin, <NearbyOffers />),
  createNavItem("Scan Receipt", "/scan-receipt", Camera, <ScanReceipt />),
  createNavItem("Favorite Shops", "/favorite-shops", Bookmark, <FavoriteShops />),
  createNavItem("Reward Customization", "/reward-customization", Edit, <RewardCustomization />),
  createNavItem("Flash Sales", "/flash-sales", Zap, <FlashSales />),
  createNavItem("Birthday Rewards", "/birthday-rewards", Cake, <BirthdayRewards />),
  createNavItem("Reward Sharing", "/reward-sharing", Share2, <RewardSharing />),
  createNavItem("Reward Categories", "/reward-categories", Grid, <RewardCategories />),
  createNavItem("Point Boosters", "/point-boosters", Bolt, <PointBoosters />),
  createNavItem("Reward Bundles", "/reward-bundles", Package, <RewardBundles />),
  createNavItem("Point Transfer", "/point-transfer", ArrowRightLeft, <PointTransfer />),
  createNavItem("Reward Auctions", "/reward-auctions", Gavel, <RewardAuctions />),
  createNavItem("Surprise Rewards", "/surprise-rewards", Gift, <SurpriseRewards />),
  createNavItem("Partner Rewards", "/partner-rewards", Handshake, <PartnerRewards />),
];
