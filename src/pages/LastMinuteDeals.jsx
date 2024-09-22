import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Tag, MapPin } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const LastMinuteDeals = () => {
  const deals = [
    { id: 1, title: "خصم 50% على البيتزا", shop: "بيتزا بلاس", expiresIn: "2 ساعة", distance: "0.5 كم" },
    { id: 2, title: "اشترِ واحدة واحصل على الثانية مجانًا", shop: "بيرجر هاوس", expiresIn: "3 ساعات", distance: "1.2 كم" },
    { id: 3, title: "خصم 30% على جميع الملابس", shop: "فاشن ستور", expiresIn: "5 ساعات", distance: "0.8 كم" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">صفقات اللحظة الأخيرة</h1>
        <p className="text-gray-600 mb-6">احصل على أفضل العروض قبل انتهاء وقتها!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{deal.title}</span>
                  <Clock className="h-5 w-5 text-red-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{deal.shop}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 text-primary ml-1" />
                    <span>ينتهي خلال {deal.expiresIn}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 ml-1" />
                    <span>{deal.distance}</span>
                  </div>
                </div>
                <Button className="w-full">احصل على العرض</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LastMinuteDeals;
