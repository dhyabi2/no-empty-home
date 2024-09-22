import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Lock, Globe, Moon, Sun, LogOut } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">الإعدادات</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="ml-2 h-5 w-5" />
              الإشعارات
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>إشعارات الدفع</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>إشعارات العروض الجديدة</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>تذكيرات انتهاء صلاحية النقاط</span>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="ml-2 h-5 w-5" />
              الأمان
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">تغيير كلمة المرور</Button>
            <Button variant="outline" className="w-full">تفعيل المصادقة الثنائية</Button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="ml-2 h-5 w-5" />
              اللغة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select defaultValue="ar">
              <SelectTrigger>
                <SelectValue placeholder="اختر اللغة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sun className="ml-2 h-5 w-5" />
              المظهر
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>الوضع الداكن</span>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Button variant="destructive" className="w-full">
          <LogOut className="ml-2 h-5 w-5" />
          تسجيل الخروج
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
