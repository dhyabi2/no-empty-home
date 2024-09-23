import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Gift, MapPin, Scan } from "lucide-react";

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
        { to: "/birthday-rewards", icon: Gift, label: "مكافآت عيد الميلاد" },
        { to: "/exclusive-events", icon: Gift, label: "الفعاليات الحصرية" },
        { to: "/reward-auctions", icon: Gift, label: "مزادات المكافآت" },
        { to: "/reward-bundles", icon: Gift, label: "حزم المكافآت" },
        { to: "/reward-categories", icon: Gift, label: "فئات المكافآت" },
        { to: "/reward-comparison", icon: Gift, label: "مقارنة المكافآت" },
        { to: "/reward-customization", icon: Gift, label: "تخصيص المكافآت" },
        { to: "/reward-gifting", icon: Gift, label: "إهداء المكافآت" },
        { to: "/reward-ratings", icon: Gift, label: "تقييم المكافآت" },
        { to: "/reward-sharing", icon: Gift, label: "مشاركة المكافآت" },
        { to: "/reward-showcase", icon: Gift, label: "عرض المكافآت" },
        { to: "/reward-subscription", icon: Gift, label: "اشتراكات المكافآت" },
        { to: "/surprise-rewards", icon: Gift, label: "مكافآت مفاجئة" },
        { to: "/reward-planner", icon: Gift, label: "مخطط المكافآت" },
        { to: "/augmented-reality-rewards", icon: Gift, label: "مكافآت الواقع المعزز" },
      ]
    },
    {
      title: "المتاجر",
      links: [
        { to: "/favorite-shops", icon: Gift, label: "المتاجر المفضلة" },
        { to: "/first-shop-visit", icon: Gift, label: "أول زيارة للمتجر" },
        { to: "/shop-profile", icon: Gift, label: "ملف المتجر" },
        { to: "/shop-authentication", icon: Gift, label: "مصادقة المتجر" },
        { to: "/shop-dashboard", icon: Gift, label: "لوحة تحكم المتجر" },
        { to: "/shop-registration", icon: Gift, label: "تسجيل المتجر" },
        { to: "/shop-settings", icon: Gift, label: "إعدادات المتجر" },
      ]
    },
    {
      title: "العروض",
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
      title: "الحساب",
      links: [
        { to: "/about-us", icon: Gift, label: "من نحن" },
        { to: "/checkout", icon: Gift, label: "الدفع" },
        { to: "/customer-management", icon: Gift, label: "إدارة العملاء" },
        { to: "/order-history", icon: Gift, label: "سجل الطلبات" },
        { to: "/point-donation", icon: Gift, label: "التبرع بالنقاط" },
        { to: "/point-transfer", icon: Gift, label: "تحويل النقاط" },
        { to: "/reward-and-scan-system", icon: Gift, label: "نظام المكافآت والمسح" },
        { to: "/scan-receipt", icon: Gift, label: "مسح الإيصال" },
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickAccessPopup;
