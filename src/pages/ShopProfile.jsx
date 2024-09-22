import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Gift } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShopProfile = () => {
  // بيانات المتجر (في التطبيق الحقيقي، ستأتي هذه البيانات من API)
  const shop = {
    id: 1,
    name: "كوفي هافن",
    category: "مقهى",
    address: "123 شارع الرئيسي، المدينة",
    phone: "+966 12 345 6789",
    hours: "7:00 ص - 10:00 م",
    rating: 4.5,
    description: "نقدم أفضل أنواع القهوة والمخبوزات الطازجة في أجواء مريحة.",
    offers: [
      { id: 1, title: "خصم 20% على القهوة المختصة", expires: "2024-06-30" },
      { id: 2, title: "اشترِ قطعتين من الكيك واحصل على الثالثة مجانًا", expires: "2024-07-15" },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">{shop.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">{shop.category}</p>
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 text-gray-400 ml-2" />
              <span>{shop.address}</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 text-gray-400 ml-2" />
              <span>{shop.phone}</span>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-gray-400 ml-2" />
              <span>{shop.hours}</span>
            </div>
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-400 ml-2" />
              <span>{shop.rating} / 5</span>
            </div>
            <p className="text-gray-700 mb-4">{shop.description}</p>
            <Button className="w-full">إضافة إلى المفضلة</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">العروض الحالية</CardTitle>
          </CardHeader>
          <CardContent>
            {shop.offers.map((offer) => (
              <div key={offer.id} className="mb-4 last:mb-0">
                <div className="flex items-center mb-2">
                  <Gift className="h-5 w-5 text-primary ml-2" />
                  <span className="font-semibold">{offer.title}</span>
                </div>
                <p className="text-sm text-gray-500">
                  ينتهي في: {new Date(offer.expires).toLocaleDateString('ar-SA')}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ShopProfile;
