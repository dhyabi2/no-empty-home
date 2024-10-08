import { HomeIcon, BellIcon, SearchIcon, StarIcon, UserIcon, HelpCircleIcon, ShoppingBagIcon, TagIcon, HistoryIcon, MessageSquare, Heart, Award, Gift, Calendar, MapPin, Camera, Bookmark, Edit, Zap, Cake, Share2, Grid, Bolt, Package, ArrowRightLeft, Gavel, Handshake, Clock, Repeat, Star as StarFilled, BarChart2, Target, Trophy, MoreHorizontal, Settings as SettingsIcon, Info, FileText } from "lucide-react";
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
import PointDonation from "./pages/PointDonation.jsx";
import WishlistSharing from "./pages/WishlistSharing.jsx";
import LastMinuteDeals from "./pages/LastMinuteDeals.jsx";
import RewardSubscription from "./pages/RewardSubscription.jsx";
import RewardRatings from "./pages/RewardRatings.jsx";
import RewardComparison from "./pages/RewardComparison.jsx";
import RewardPlanner from "./components/RewardPlanner.jsx";
import RewardShowcase from "./pages/RewardShowcase.jsx";
import More from "./pages/More.jsx";
import SettingsPage from "./pages/Settings.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";

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
  createNavItem("Point Donation", "/point-donation", Heart, <PointDonation />),
  createNavItem("Wishlist Sharing", "/wishlist-sharing", Share2, <WishlistSharing />),
  createNavItem("Last-Minute Deals", "/last-minute-deals", Clock, <LastMinuteDeals />),
  createNavItem("Reward Subscription", "/reward-subscription", Repeat, <RewardSubscription />),
  createNavItem("Reward Ratings", "/reward-ratings", StarFilled, <RewardRatings />),
  createNavItem("Reward Comparison", "/reward-comparison", BarChart2, <RewardComparison />),
  createNavItem("Reward Planner", "/reward-planner", Target, <RewardPlanner />),
  createNavItem("Reward Showcase", "/reward-showcase", Trophy, <RewardShowcase />),
  createNavItem("More", "/more", MoreHorizontal, <More />),
  createNavItem("Settings", "/settings", SettingsIcon, <SettingsPage />),
  createNavItem("About Us", "/about-us", Info, <AboutUs />),
  createNavItem("Terms & Conditions", "/terms-and-conditions", FileText, <TermsAndConditions />),
];
