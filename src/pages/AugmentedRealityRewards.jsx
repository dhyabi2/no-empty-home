import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Camera, Gift } from "lucide-react";

const AugmentedRealityRewards = () => {
  const arRewards = [
    { id: 1, name: "خصم مخفي", description: "امسح المتجر للعثور على كوبون خصم مخفي بنسبة 20٪" },
    { id: 2, name: "بحث عن الكنز الافتراضي", description: "اجمع العملات الافتراضية حول المركز التجاري للحصول على نقاط إضافية" },
    { id: 3, name: "معاينة المنتج بالواقع المعزز", description: "شاهد كيف تبدو المنتجات في مساحتك قبل الشراء" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">مكافآت الواقع المعزز</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="ml-2 h-5 w-5" />
              ماسح مكافآت الواقع المعزز
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              استخدم الكاميرا الخاصة بك لمسح مكافآت الواقع المعزز في المتاجر والمواقع المشاركة.
            </p>
            <Button className="w-full">
              فتح ماسح الواقع المعزز
            </Button>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold mb-4">تجارب الواقع المعزز المتاحة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arRewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="ml-2 h-5 w-5" />
                  {reward.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{reward.description}</p>
                <Button variant="outline" className="w-full">بدء التجربة</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AugmentedRealityRewards;
