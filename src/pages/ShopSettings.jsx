import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Store, MapPin, Phone, Mail, Clock, DollarSign } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShopSettings = () => {
  const [shopData, setShopData] = useState({
    name: 'متجر الإلكترونيات الحديثة',
    address: 'شارع الملك فهد، الرياض',
    phone: '+966 12 345 6789',
    email: 'info@modernelectronics.com',
    openingHours: '9:00 صباحًا - 10:00 مساءً',
    currency: 'SAR',
  });

  const [notifications, setNotifications] = useState({
    orderNotifications: true,
    promotionalEmails: false,
    smsAlerts: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNotificationChange = (name) => {
    setNotifications(prevNotifications => ({
      ...prevNotifications,
      [name]: !prevNotifications[name]
    }));
  };

  const handleSave = () => {
    console.log('بيانات المتجر المحدثة:', shopData);
    console.log('إعدادات الإشعارات:', notifications);
    alert('تم حفظ الإعدادات بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">إعدادات المتجر</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>معلومات المتجر الأساسية</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  اسم المتجر
                </label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    value={shopData.name}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  العنوان
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="address"
                    name="address"
                    value={shopData.address}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  رقم الهاتف
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    value={shopData.phone}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    value={shopData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700 mb-1">
                  ساعات العمل
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="openingHours"
                    name="openingHours"
                    value={shopData.openingHours}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                  العملة
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Select
                    value={shopData.currency}
                    onValueChange={(value) => handleInputChange({ target: { name: 'currency', value } })}
                  >
                    <SelectTrigger id="currency" className="pl-10">
                      <SelectValue placeholder="اختر العملة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SAR">ريال سعودي (SAR)</SelectItem>
                      <SelectItem value="USD">دولار أمريكي (USD)</SelectItem>
                      <SelectItem value="EUR">يورو (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>إعدادات الإشعارات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">إشعارات الطلبات</span>
                <Switch
                  checked={notifications.orderNotifications}
                  onCheckedChange={() => handleNotificationChange('orderNotifications')}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">رسائل البريد الإلكتروني الترويجية</span>
                <Switch
                  checked={notifications.promotionalEmails}
                  onCheckedChange={() => handleNotificationChange('promotionalEmails')}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">تنبيهات الرسائل النصية</span>
                <Switch
                  checked={notifications.smsAlerts}
                  onCheckedChange={() => handleNotificationChange('smsAlerts')}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button onClick={handleSave} className="w-full">
          حفظ الإعدادات
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default ShopSettings;
