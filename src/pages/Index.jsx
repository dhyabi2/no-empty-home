import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
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
      { to: "/redeem-points", icon: Gift, label: "استبدال النقاط" },
      { to: "/nearby-offers", icon: MapPin, label: "العروض القريبة" },
      { to: "/scan-receipt", icon: Scan, label: "مسح الإيصال" },
    ];
    setRecentLinks(fetchedRecentLinks);
  }, []);

  const quickLinkSections = [
    {
      title: "المكافآت",
      links: [
        { to: "/redeem-points", icon: Gift, label: "استبدال النقاط" },
        { to: "/birthday-rewards", icon: Cake, label: "مكافآت عيد الميلاد" },
        { to: "/exclusive-events", icon: Calendar, label: "الفعاليات الحصرية" },
        { to: "/reward-auctions", icon: Flame, label: "مزادات المكافآت" },
        { to: "/reward-bundles", icon: Package, label: "حزم المكافآت" },
        { to: "/reward-categories", icon: Tag, label: "فئات المكافآت" },
        { to: "/reward-comparison", icon: BarChart2, label: "مقارنة المكافآت" },
        { to: "/reward-customization", icon: Edit, label: "تخصيص المكافآت" },
        { to: "/reward-gifting", icon: Gift, label: "إهداء المكافآت" },
        { to: "/reward-ratings", icon: ThumbsUp, label: "تقييم المكافآت" },
        { to: "/reward-sharing", icon: Share2, label: "مشاركة المكافآت" },
        { to: "/reward-showcase", icon: Trophy, label: "عرض المكافآت" },
        { to: "/reward-subscription", icon: Repeat, label: "اشتراكات المكافآت" },
        { to: "/surprise-rewards", icon: Sparkles, label: "مكافآت مفاجئة" },
        { to: "/reward-planner", icon: BarChart2, label: "مخطط المكافآت" },
        { to: "/augmented-reality-rewards", icon: Glasses, label: "مكافآت الواقع المعزز" },
      ]
    },
    {
      title: "المتاجر",
      links: [
        { to: "/favorite-shops", icon: Star, label: "المتاجر المفضلة" },
        { to: "/first-shop-visit", icon: MapPin, label: "أول زيارة للمتجر" },
        { to: "/shop-profile", icon: Info, label: "ملف المتجر" },
        { to: "/shop-authentication", icon: Key, label: "مصادقة المتجر" },
        { to: "/shop-dashboard", icon: LayoutDashboard, label: "لوحة تحكم المتجر" },
        { to: "/shop-registration", icon: Users, label: "تسجيل المتجر" },
        { to: "/shop-settings", icon: Settings, label: "إعدادات المتجر" },
      ]
    },
    {
      title: "العروض",
      links: [
        { to: "/nearby-offers", icon: MapPin, label: "العروض القريبة" },
        { to: "/offer-detail", icon: Tag, label: "تفاصيل العرض" },
        { to: "/offer-management", icon: Settings, label: "إدارة العروض" },
        { to: "/flash-sales", icon: Zap, label: "التخفيضات السريعة" },
        { to: "/last-minute-deals", icon: Clock, label: "صفقات اللحظة الأخيرة" },
        { to: "/partner-rewards", icon: Handshake, label: "مكافآت الشركاء" },
        { to: "/point-boosters", icon: Zap, label: "معززات النقاط" },
      ]
    },
    {
      title: "الحساب",
      links: [
        { to: "/about-us", icon: Info, label: "من نحن" },
        { to: "/checkout", icon: ShoppingCart, label: "الدفع" },
        { to: "/customer-management", icon: Users, label: "إدارة العملاء" },
        { to: "/order-history", icon: Clock, label: "سجل الطلبات" },
        { to: "/point-donation", icon: Heart, label: "التبرع بالنقاط" },
        { to: "/point-transfer", icon: ArrowRightLeft, label: "تحويل النقاط" },
        { to: "/reward-and-scan-system", icon: Scan, label: "نظام المكافآت والمسح" },
        { to: "/scan-receipt", icon: CreditCard, label: "مسح الإيصال" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pb-20">
        <h1 className="text-3xl font-bold mb-6">مرحبًا بك في تطبيق الولاء</h1>
        
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
              {showQuickAccess ? "إخفاء الوصول السريع" : "إظهار الوصول السريع"}
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
                  <h2 className="text-xl font-semibold mb-4">الوصول السريع</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">الروابط الأخيرة</h3>
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
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation />
      </div>
      <FloatingActionButton />
    </div>
  );
};

export default Index;
