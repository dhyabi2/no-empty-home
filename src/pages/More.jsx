import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Settings, HelpCircle, Info, LogOut } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const More = () => {
  const menuItems = [
    { icon: User, title: "الملف الشخصي", link: "/profile" },
    { icon: Settings, title: "الإعدادات", link: "/settings" },
    { icon: HelpCircle, title: "المساعدة والدعم", link: "/help-support" },
    { icon: Info, title: "عن التطبيق", link: "/about" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">المزيد</h1>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.link}>
                <Button variant="ghost" className="w-full justify-start mb-2 last:mb-0">
                  <item.icon className="h-5 w-5 ml-2" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>معلومات التطبيق</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              إصدار التطبيق: 1.0.0
            </p>
            <Button variant="outline" className="w-full mb-4">
              التحقق من التحديثات
            </Button>
            <Button variant="destructive" className="w-full">
              <LogOut className="h-5 w-5 ml-2" />
              تسجيل الخروج
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default More;
