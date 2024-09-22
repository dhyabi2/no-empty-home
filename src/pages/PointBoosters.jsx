import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, Calendar, ShoppingBag } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PointBoosters = () => {
  const boosters = [
    { id: 1, title: "مضاعفة النقاط", description: "احصل على ضعف النقاط على جميع مشترياتك", duration: "24 ساعة", points: 1000 },
    { id: 2, title: "يوم التسوق المجنون", description: "اكسب 3 أضعاف النقاط على المشتريات في متاجر محددة", duration: "12 ساعة", points: 1500 },
    { id: 3, title: "مكافأة نهاية الأسبوع", description: "اكسب نقاطًا إضافية على مشترياتك خلال عطلة نهاية الأسبوع", duration: "48 ساعة", points: 800 },
    { id: 4, title: "تعزيز الفئة", description: "اكسب نقاطًا مضاعفة على فئة محددة من المنتجات", duration: "7 أيام", points: 2000 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">معززات النقاط</h1>
        <p className="text-gray-600 mb-6">استخدم معززات النقاط لزيادة رصيدك بشكل أسرع!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boosters.map((booster) => (
            <Card key={booster.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{booster.title}</span>
                  <Badge variant="secondary">
                    <Zap className="h-4 w-4 ml-1" />
                    {booster.points} نقطة
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{booster.description}</p>
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 ml-2 text-primary" />
                  <span>المدة: {booster.duration}</span>
                </div>
                <Button className="w-full">تفعيل المعزز</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-6 w-6 ml-2" />
              جدول المعززات القادمة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ShoppingBag className="h-5 w-5 ml-2 text-primary" />
                <span>يوم التسوق الكبير: الجمعة القادمة</span>
              </li>
              <li className="flex items-center">
                <Zap className="h-5 w-5 ml-2 text-primary" />
                <span>ساعة النقاط المجنونة: الأحد القادم الساعة 8 مساءً</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PointBoosters;
