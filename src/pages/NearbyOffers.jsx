import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Coffee, ShoppingBag, Utensils } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NearbyOffers = () => {
  const offers = [
    { id: 1, title: "خصم 20% على القهوة", shop: "كافيه السعادة", distance: "0.5 كم", category: "مقهى", icon: <Coffee className="h-6 w-6" /> },
    { id: 2, title: "اشترِ قطعة واحصل على الثانية مجانًا", shop: "متجر الأزياء", distance: "0.8 كم", category: "تسوق", icon: <ShoppingBag className="h-6 w-6" /> },
    { id: 3, title: "خصم 15% على وجبات الغداء", shop: "مطعم اللذيذ", distance: "1.2 كم", category: "مطعم", icon: <Utensils className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">العروض القريبة</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              موقعك الحالي
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
            <Button className="mt-4">
              <Navigation className="h-4 w-4 mr-2" />
              تحديث الموقع
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {offer.icon}
                  <span className="mr-2">{offer.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{offer.shop}</p>
                <p className="text-sm text-gray-500 mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {offer.distance}
                </p>
                <Button className="w-full">عرض التفاصيل</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline">تحميل المزيد من العروض</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NearbyOffers;
