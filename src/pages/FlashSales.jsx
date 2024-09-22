import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Clock } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const FlashSales = () => {
  const flashSales = [
    { id: 1, title: "خصم 50% على القهوة", shop: "كوفي هافن", endTime: "12:00 م" },
    { id: 2, title: "اشترِ واحدة واحصل على الثانية مجانًا", shop: "بيتزا بلاس", endTime: "2:00 م" },
    { id: 3, title: "خصم 30% على جميع الكتب", shop: "مكتبة المعرفة", endTime: "4:00 م" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">عروض فلاش</h1>
        <p className="text-gray-600 mb-6">احصل على صفقات حصرية لفترة محدودة!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashSales.map((sale) => (
            <Card key={sale.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="ml-2 h-5 w-5 text-yellow-400" />
                  {sale.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{sale.shop}</p>
                <div className="flex items-center text-red-500 mb-4">
                  <Clock className="ml-2 h-4 w-4" />
                  <span>ينتهي في {sale.endTime}</span>
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

export default FlashSales;
