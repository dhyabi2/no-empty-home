import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
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
import FloatingActionButton from '../components/FloatingActionButton';
import { MapPin, Gift, Coffee, Zap, Share2, Trophy, CreditCard, Info, Cake, ShoppingCart, Users, Calendar, Star, Flame, Clock, Tag, Package, Repeat, BarChart2, Edit, ThumbsUp, Scan, Key, LayoutDashboard, Settings, Sparkles, Handshake, Heart, Glasses, ArrowRightLeft } from "lucide-react";

const QuickAccessLink = ({ to, icon: Icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
      <Icon className="h-6 w-6 mb-2 text-primary" />
      <span className="text-sm text-center">{label}</span>
    </Link>
  </motion.div>
);

const Index = () => {
  const [recentLinks, setRecentLinks] = useState([]);
  const [showQuickAccess, setShowQuickAccess] = useState(false);

  useEffect(() => {
    // Simulating fetching recent links from local storage or API
    const fetchedRecentLinks = [
      { to: "/redeem-points", icon: Gift, label: "Redeem Points" },
      { to: "/nearby-offers", icon: MapPin, label: "Nearby Offers" },
      { to: "/scan-receipt", icon: Scan, label: "Scan Receipt" },
    ];
    setRecentLinks(fetchedRecentLinks);
  }, []);

  const quickLinkSections = [
    {
      title: "Rewards",
      links: [
        { to: "/redeem-points", icon: Gift, label: "Redeem Points" },
        { to: "/birthday-rewards", icon: Cake, label: "Birthday Rewards" },
        { to: "/exclusive-events", icon: Calendar, label: "Exclusive Events" },
        { to: "/reward-auctions", icon: Flame, label: "Reward Auctions" },
        { to: "/reward-bundles", icon: Package, label: "Reward Bundles" },
        { to: "/reward-categories", icon: Tag, label: "Reward Categories" },
        { to: "/reward-comparison", icon: BarChart2, label: "Compare Rewards" },
        { to: "/reward-customization", icon: Edit, label: "Customize Rewards" },
        { to: "/reward-gifting", icon: Gift, label: "Gift Rewards" },
        { to: "/reward-ratings", icon: ThumbsUp, label: "Rate Rewards" },
        { to: "/reward-sharing", icon: Share2, label: "Share Rewards" },
        { to: "/reward-showcase", icon: Trophy, label: "Reward Showcase" },
        { to: "/reward-subscription", icon: Repeat, label: "Reward Subscriptions" },
        { to: "/surprise-rewards", icon: Sparkles, label: "Surprise Rewards" },
        { to: "/reward-planner", icon: BarChart2, label: "Reward Planner" },
        { to: "/augmented-reality-rewards", icon: Glasses, label: "AR Rewards" },
      ]
    },
    {
      title: "Shops",
      links: [
        { to: "/favorite-shops", icon: Star, label: "Favorite Shops" },
        { to: "/first-shop-visit", icon: MapPin, label: "First Shop Visit" },
        { to: "/shop-profile", icon: Info, label: "Shop Profile" },
        { to: "/shop-authentication", icon: Key, label: "Shop Authentication" },
        { to: "/shop-dashboard", icon: LayoutDashboard, label: "Shop Dashboard" },
        { to: "/shop-registration", icon: Users, label: "Shop Registration" },
        { to: "/shop-settings", icon: Settings, label: "Shop Settings" },
      ]
    },
    {
      title: "Offers",
      links: [
        { to: "/nearby-offers", icon: MapPin, label: "Nearby Offers" },
        { to: "/offer-detail", icon: Tag, label: "Offer Details" },
        { to: "/offer-management", icon: Settings, label: "Manage Offers" },
        { to: "/flash-sales", icon: Zap, label: "Flash Sales" },
        { to: "/last-minute-deals", icon: Clock, label: "Last Minute Deals" },
        { to: "/partner-rewards", icon: Handshake, label: "Partner Rewards" },
        { to: "/point-boosters", icon: Zap, label: "Point Boosters" },
      ]
    },
    {
      title: "Account",
      links: [
        { to: "/about-us", icon: Info, label: "About Us" },
        { to: "/checkout", icon: ShoppingCart, label: "Checkout" },
        { to: "/customer-management", icon: Users, label: "Manage Customers" },
        { to: "/order-history", icon: Clock, label: "Order History" },
        { to: "/point-donation", icon: Heart, label: "Donate Points" },
        { to: "/point-transfer", icon: ArrowRightLeft, label: "Transfer Points" },
        { to: "/reward-and-scan-system", icon: Scan, label: "Reward & Scan" },
        { to: "/scan-receipt", icon: CreditCard, label: "Scan Receipt" },
      ]
    },
  ];

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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={() => setShowQuickAccess(!showQuickAccess)}
              className="w-full mb-4"
            >
              {showQuickAccess ? "Hide Quick Access" : "Show Quick Access"}
            </Button>
          </motion.div>

          {showQuickAccess && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Recent Links</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {recentLinks.map((link, index) => (
                        <QuickAccessLink key={index} {...link} />
                      ))}
                    </div>
                  </div>

                  <Tabs defaultValue="rewards">
                    <TabsList className="mb-4 flex flex-wrap">
                      {quickLinkSections.map((section) => (
                        <TabsTrigger key={section.title} value={section.title.toLowerCase()}>
                          {section.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {quickLinkSections.map((section) => (
                      <TabsContent key={section.title} value={section.title.toLowerCase()}>
                        <ScrollArea className="h-72">
                          <div className="grid grid-cols-3 gap-4">
                            {section.links.map((link, index) => (
                              <QuickAccessLink key={index} {...link} />
                            ))}
                          </div>
                        </ScrollArea>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
