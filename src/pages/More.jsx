import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, HelpCircle, Info, Bell, Gift, Star, LogOut } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const More = () => {
  const menuItems = [
    { icon: <Settings className="h-6 w-6" />, title: "الإعدادات", link: "/settings" },
    { icon: <HelpCircle className="h-6 w-6" />, title: "المساعدة والدعم", link: "/help-support" },
    { icon: <Info className="h-6 w-6" />, title: "عن التطبيق", link: "/about" },
    { icon: <Bell className="h-6 w-6" />, title: "الإشعارات", link: "/notifications" },
    { icon: <Gift className="h-6 w-6" />, title: "دعوة الأصدقاء", link: "/invite-friends" },
    { icon: <Star className="h-6 w-6" />, title: "تقييم التطبيق", link: "/rate-app" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">المزيد</h1>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="صورة الملف الشخصي"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">أحمد محمد</h2>
                <p className="text-gray-600">ahmed@example.com</p>
              </div>
            </div>
            <Link to="/profile">
              <Button className="w-full">عرض الملف الشخصي</Button>
            </Link>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    {item.icon}
                    <span className="mr-4 text-lg">{item.title}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Button variant="outline" className="w-full mt-6 text-red-500 hover:text-red-700">
          <LogOut className="h-5 w-5 mr-2" />
          تسجيل الخروج
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default More;
