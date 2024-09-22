import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeReward from '../components/WelcomeReward';
import ShopVisitGameElement from '../components/ShopVisitGameElement';
import PersonalizedShopRecommendations from '../components/PersonalizedShopRecommendations';
import PointBoosters from '../components/PointBoosters';
import RewardConcierge from '../components/RewardConcierge';
import SocialSharing from '../components/SocialSharing';
import GamifiedChallenges from '../components/GamifiedChallenges';
import VirtualLoyaltyCard from '../components/VirtualLoyaltyCard';
import { Link } from 'react-router-dom';
import { MapPin, Gift, Coffee, Zap, Share2, Trophy, CreditCard, Info, Cake, ShoppingCart, Users, Calendar, Star, Flame, Clock, Tag, Package, Repeat, BarChart2, Edit, Gift, ThumbsUp, Scan, Key, LayoutDashboard, Settings, Sparkles } from "lucide-react";

const QuickAccessLink = ({ to, icon: Icon, label }) => (
  <Link to={to} className="flex items-center p-2 hover:bg-gray-100 rounded">
    <Icon className="h-4 w-4 mr-2" />
    <span className="text-sm">{label}</span>
  </Link>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Loyalty App</h1>
        
        <WelcomeReward />
        
        <div className="mt-8 space-y-8">
          <ShopVisitGameElement />
          <PersonalizedShopRecommendations />
          <PointBoosters />
          <RewardConcierge />
          <SocialSharing />
          <GamifiedChallenges />
          <VirtualLoyaltyCard />
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
              <Tabs defaultValue="rewards">
                <TabsList className="mb-4">
                  <TabsTrigger value="rewards">Rewards</TabsTrigger>
                  <TabsTrigger value="shops">Shops</TabsTrigger>
                  <TabsTrigger value="offers">Offers</TabsTrigger>
                  <TabsTrigger value="account">Account</TabsTrigger>
                </TabsList>
                <TabsContent value="rewards" className="grid grid-cols-2 gap-2">
                  <QuickAccessLink to="/redeem-points" icon={Gift} label="Redeem Points" />
                  <QuickAccessLink to="/birthday-rewards" icon={Cake} label="Birthday Rewards" />
                  <QuickAccessLink to="/exclusive-events" icon={Calendar} label="Exclusive Events" />
                  <QuickAccessLink to="/reward-auctions" icon={Flame} label="Reward Auctions" />
                  <QuickAccessLink to="/reward-bundles" icon={Package} label="Reward Bundles" />
                  <QuickAccessLink to="/reward-categories" icon={Tag} label="Reward Categories" />
                  <QuickAccessLink to="/reward-comparison" icon={BarChart2} label="Compare Rewards" />
                  <QuickAccessLink to="/reward-customization" icon={Edit} label="Customize Rewards" />
                  <QuickAccessLink to="/reward-gifting" icon={GiftIcon} label="Gift Rewards" />
                  <QuickAccessLink to="/reward-ratings" icon={ThumbsUp} label="Rate Rewards" />
                  <QuickAccessLink to="/reward-sharing" icon={Share2} label="Share Rewards" />
                  <QuickAccessLink to="/reward-showcase" icon={Trophy} label="Reward Showcase" />
                  <QuickAccessLink to="/reward-subscription" icon={Repeat} label="Reward Subscriptions" />
                  <QuickAccessLink to="/surprise-rewards" icon={Sparkles} label="Surprise Rewards" />
                </TabsContent>
                <TabsContent value="shops" className="grid grid-cols-2 gap-2">
                  <QuickAccessLink to="/favorite-shops" icon={Star} label="Favorite Shops" />
                  <QuickAccessLink to="/first-shop-visit" icon={MapPin} label="First Shop Visit" />
                  <QuickAccessLink to="/shop-profile" icon={Info} label="Shop Profile" />
                  <QuickAccessLink to="/shop-authentication" icon={Key} label="Shop Authentication" />
                  <QuickAccessLink to="/shop-dashboard" icon={LayoutDashboard} label="Shop Dashboard" />
                  <QuickAccessLink to="/shop-registration" icon={Users} label="Shop Registration" />
                  <QuickAccessLink to="/shop-settings" icon={Settings} label="Shop Settings" />
                </TabsContent>
                <TabsContent value="offers" className="grid grid-cols-2 gap-2">
                  <QuickAccessLink to="/nearby-offers" icon={MapPin} label="Nearby Offers" />
                  <QuickAccessLink to="/offer-detail" icon={Tag} label="Offer Details" />
                  <QuickAccessLink to="/offer-management" icon={Settings} label="Manage Offers" />
                  <QuickAccessLink to="/flash-sales" icon={Zap} label="Flash Sales" />
                  <QuickAccessLink to="/last-minute-deals" icon={Clock} label="Last Minute Deals" />
                  <QuickAccessLink to="/partner-rewards" icon={Handshake} label="Partner Rewards" />
                  <QuickAccessLink to="/point-boosters" icon={Zap} label="Point Boosters" />
                </TabsContent>
                <TabsContent value="account" className="grid grid-cols-2 gap-2">
                  <QuickAccessLink to="/about-us" icon={Info} label="About Us" />
                  <QuickAccessLink to="/checkout" icon={ShoppingCart} label="Checkout" />
                  <QuickAccessLink to="/customer-management" icon={Users} label="Manage Customers" />
                  <QuickAccessLink to="/order-history" icon={Clock} label="Order History" />
                  <QuickAccessLink to="/point-donation" icon={Gift} label="Donate Points" />
                  <QuickAccessLink to="/point-transfer" icon={Repeat} label="Transfer Points" />
                  <QuickAccessLink to="/reward-and-scan-system" icon={Scan} label="Reward & Scan" />
                  <QuickAccessLink to="/scan-receipt" icon={CreditCard} label="Scan Receipt" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
