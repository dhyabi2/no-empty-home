import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Repeat, Check, X } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardSubscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    { id: 'basic', name: 'الأساسية', price: 50, features: ['مكافأة شهرية', 'خصم 5٪ على المشتريات', 'دعم عبر البريد الإلكتروني'] },
    { id: 'premium', name: 'المميزة', price: 100, features: ['مكافأة أسبوعية', 'خصم 10٪ على المشتريات', 'دعم على مدار الساعة', 'وصول حصري للعروض'] },
    { id: 'vip', name: 'كبار الشخصيات', price: 200, features: ['مكافأة يومية', 'خصم 15٪ على المشتريات', 'مدير حساب شخصي', 'دعوات لفعاليات حصرية', 'توصيل مجاني غير محدود'] },
  ];

  const handleSubscribe = (planId) => {
    setSelectedPlan(planId);
    alert(`تم الاشتراك في الخطة ${planId} بنجاح!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">اشتراك المكافآت</h1>
        <p className="text-gray-600 mb-6">اختر خطة الاشتراك التي تناسبك للحصول على مزايا حصرية ومكافآت إضافية.</p>
        
        <Tabs defaultValue="basic" className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            {plans.map((plan) => (
              <TabsTrigger key={plan.id} value={plan.id}>{plan.name}</TabsTrigger>
            ))}
          </TabsList>
          {plans.map((plan) => (
            <TabsContent key={plan.id} value={plan.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{plan.name}</span>
                    <span className="text-2xl font-bold">{plan.price} ريال/شهر</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-4" 
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={selectedPlan === plan.id}
                  >
                    {selectedPlan === plan.id ? 'مشترك' : 'اشترك الآن'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Repeat className="h-6 w-6 ml-2" />
              كيف يعمل اشتراك المكافآت
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>اختر الخطة التي تناسب احتياجاتك.</li>
              <li>قم بالدفع الشهري لتفعيل اشتراكك.</li>
              <li>استمتع بالمزايا الحصرية والمكافآت الإضافية طوال فترة اشتراكك.</li>
              <li>يمكنك ترقية أو إلغاء اشتراكك في أي وقت.</li>
            </ol>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardSubscription;
