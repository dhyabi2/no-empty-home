import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle, AlertCircle, Gift } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'info', title: 'تحديث التطبيق', message: 'تم إصدار نسخة جديدة من التطبيق. قم بالتحديث الآن للحصول على أحدث الميزات.', time: '2 ساعة مضت' },
    { id: 2, type: 'success', title: 'تم استلام المكافأة', message: 'تهانينا! لقد ربحت 500 نقطة من آخر عملية شراء.', time: '5 ساعات مضت' },
    { id: 3, type: 'warning', title: 'انتهاء صلاحية النقاط', message: 'ستنتهي صلاحية 1000 نقطة خلال 7 أيام. استبدلها الآن!', time: 'يوم واحد مضى' },
    { id: 4, type: 'offer', title: 'عرض خاص', message: 'احصل على خصم 20٪ على مشترياتك التالية في متجر الإلكترونيات.', time: '3 أيام مضت' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'info':
        return <Bell className="h-6 w-6 text-blue-500" />;
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-6 w-6 text-yellow-500" />;
      case 'offer':
        return <Gift className="h-6 w-6 text-purple-500" />;
      default:
        return <Bell className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">الإشعارات</h1>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {getIcon(notification.type)}
                  <span className="mr-2">{notification.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="mt-6 w-full">تحديد الكل كمقروء</Button>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;
