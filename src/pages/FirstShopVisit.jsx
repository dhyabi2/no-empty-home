import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, MapPin, Star, Coffee } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const FirstShopVisit = () => {
  const shop = {
    id: 1,
    name: "كوفي هافن",
    address: "123 شارع الرئيسي، المدينة",
    rating: 4.5,
    firstVisitOffer: "قهوة مجانية مع أي طلب"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">أول زيارة لك!</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Coffee className="h-6 w-6 ml-2 text-primary" />
              {shop.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">مرحبًا بك في أول زيارة لك إلى {shop.name}! نحن متحمسون لاستقبالك.</p>
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 text-gray-400 ml-2" />
              <span>{shop.address}</span>
            </div>
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-400 ml-2" />
              <span>{shop.rating} / 5</span>
            </div>
            <Link to={`/shops/${shop.id}`}>
              <Button className="w-full mb-4">عرض تفاصيل المتجر</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="h-6 w-6 ml-2 text-primary" />
              عرض الزيارة الأولى
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-4">{shop.firstVisitOffer}</p>
            <p className="text-gray-600 mb-4">
              لتفعيل هذا العرض، ما عليك سوى إظهار هذه الشاشة عند الطلب. نتمنى لك تجربة رائعة!
            </p>
            <Button className="w-full">تفعيل العرض</Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default FirstShopVisit;
