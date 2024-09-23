import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Gift, Store, Award, User } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const QuickAccessPopup = ({ isOpen, onClose }) => {
  const [recentLinks, setRecentLinks] = useState([]);

  useEffect(() => {
    // Simulating fetching recent links from local storage or API
    const fetchedRecentLinks = [
      { to: "/redeem-points", icon: Gift, label: "استبدال النقاط" },
      { to: "/nearby-offers", icon: Store, label: "العروض القريبة" },
      { to: "/scan-receipt", icon: Award, label: "مسح الإيصال" },
    ];
    setRecentLinks(fetchedRecentLinks);
  }, []);

  const quickLinkSections = [
    {
      title: "العروض",
      icon: Gift,
      links: [
        { to: "/nearby-offers", icon: Gift, label: "العروض القريبة" },
        { to: "/offer-detail", icon: Gift, label: "تفاصيل العرض" },
        { to: "/offer-management", icon: Gift, label: "إدارة العروض" },
        { to: "/flash-sales", icon: Gift, label: "التخفيضات السريعة" },
        { to: "/last-minute-deals", icon: Gift, label: "صفقات اللحظة الأخيرة" },
        { to: "/partner-rewards", icon: Gift, label: "مكافآت الشركاء" },
        { to: "/point-boosters", icon: Gift, label: "معززات النقاط" },
      ]
    },
    {
      title: "المتاجر",
      icon: Store,
      links: [
        { to: "/favorite-shops", icon: Store, label: "المتاجر المفضلة" },
        { to: "/first-shop-visit", icon: Store, label: "أول زيارة للمتجر" },
        { to: "/shop-profile", icon: Store, label: "ملف المتجر" },
        { to: "/shop-authentication", icon: Store, label: "مصادقة المتجر" },
        { to: "/shop-dashboard", icon: Store, label: "لوحة تحكم المتجر" },
        { to: "/shop-registration", icon: Store, label: "تسجيل المتجر" },
        { to: "/shop-settings", icon: Store, label: "إعدادات المتجر" },
      ]
    },
    {
      title: "المكافآت",
      icon: Award,
      links: [
        { to: "/redeem-points", icon: Award, label: "استبدال النقاط" },
        { to: "/birthday-rewards", icon: Award, label: "مكافآت عيد الميلاد" },
        { to: "/exclusive-events", icon: Award, label: "الفعاليات الحصرية" },
        { to: "/reward-auctions", icon: Award, label: "مزادات المكافآت" },
        { to: "/reward-bundles", icon: Award, label: "حزم المكافآت" },
        { to: "/reward-categories", icon: Award, label: "فئات المكافآت" },
        { to: "/reward-comparison", icon: Award, label: "مقارنة المكافآت" },
        { to: "/reward-customization", icon: Award, label: "تخصيص المكافآت" },
        { to: "/reward-gifting", icon: Award, label: "إهداء المكافآت" },
        { to: "/reward-ratings", icon: Award, label: "تقييم المكافآت" },
        { to: "/reward-sharing", icon: Award, label: "مشاركة المكافآت" },
        { to: "/reward-showcase", icon: Award, label: "عرض المكافآت" },
        { to: "/reward-subscription", icon: Award, label: "اشتراكات المكافآت" },
        { to: "/surprise-rewards", icon: Award, label: "مكافآت مفاجئة" },
        { to: "/reward-planner", icon: Award, label: "مخطط المكافآت" },
        { to: "/augmented-reality-rewards", icon: Award, label: "مكافآت الواقع المعزز" },
      ]
    },
    {
      title: "الحساب",
      icon: User,
      links: [
        { to: "/about-us", icon: User, label: "من نحن" },
        { to: "/checkout", icon: User, label: "الدفع" },
        { to: "/customer-management", icon: User, label: "إدارة العملاء" },
        { to: "/order-history", icon: User, label: "سجل الطلبات" },
        { to: "/point-donation", icon: User, label: "التبرع بالنقاط" },
        { to: "/point-transfer", icon: User, label: "تحويل النقاط" },
        { to: "/reward-and-scan-system", icon: User, label: "نظام المكافآت والمسح" },
        { to: "/scan-receipt", icon: User, label: "مسح الإيصال" },
      ]
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">الوصول السريع</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">الروابط الأخيرة</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {recentLinks.map((link, index) => (
                      <QuickAccessLink key={index} {...link} />
                    ))}
                  </div>
                </div>

                <Tabs defaultValue="العروض">
                  <TabsList className="mb-4 flex justify-between w-full">
                    {quickLinkSections.map((section) => (
                      <TabsTrigger key={section.title} value={section.title} className="flex-1">
                        <section.icon className="h-5 w-5 mr-2" />
                        {section.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {quickLinkSections.map((section) => (
                    <TabsContent key={section.title} value={section.title}>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickAccessPopup;
