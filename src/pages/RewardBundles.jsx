import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Coffee, Film, Utensils, Plane, Gift } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardBundles = () => {
  const bundles = [
    { 
      id: 1, 
      name: "حزمة عشاق القهوة", 
      description: "5 قهوة مجانية + 1 معجنات", 
      points: 500,
      icon: Coffee
    },
    { 
      id: 2, 
      name: "حزمة ليلة الأفلام", 
      description: "تذكرتي سينما + فشار كبير", 
      points: 750,
      icon: Film
    },
    { 
      id: 3, 
      name: "حزمة المطاعم الفاخرة", 
      description: "عشاء لشخصين في مطعم 5 نجوم", 
      points: 1000,
      icon: Utensils
    },
    { 
      id: 4, 
      name: "حزمة العطلة القصيرة", 
      description: "إقامة لليلة واحدة + وجبة إفطار", 
      points: 2000,
      icon: Plane
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">حزم المكافآت</h1>
        <p className="text-gray-600 mb-6">احصل على قيمة أكبر مع حزم المكافآت المختارة!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <Card key={bundle.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <bundle.icon className="h-6 w-6 ml-2 text-primary" />
                  {bundle.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{bundle.description}</p>
                <p className="font-semibold mb-4">{bundle.points} نقطة</p>
                <Button className="w-full">
                  <Gift className="h-5 w-5 ml-2" />
                  استبدال الحزمة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-6 w-6 ml-2" />
              لماذا تختار حزم المكافآت؟
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>قيمة أكبر مقابل نقاطك</li>
              <li>تجارب متكاملة ومختارة بعناية</li>
              <li>توفير في النقاط مقارنة بالاستبدال الفردي</li>
              <li>تنوع في الخيارات لتناسب مختلف الأذواق</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardBundles;
