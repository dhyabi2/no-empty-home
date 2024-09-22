import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Gift, ExternalLink } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnerRewards = () => {
  const partnerRewards = [
    { id: 1, partner: "شركة الطيران الوطنية", reward: "خصم 10٪ على الرحلات الدولية", points: 5000, category: "سفر" },
    { id: 2, partner: "فندق النجوم الخمس", reward: "ليلة مجانية عند الحجز لمدة 3 ليالي", points: 8000, category: "إقامة" },
    { id: 3, partner: "مطعم الذواقة", reward: "وجبة مجانية لشخصين", points: 3000, category: "مطاعم" },
    { id: 4, partner: "متجر الإلكترونيات الكبير", reward: "قسيمة شراء بقيمة 200 ريال", points: 4000, category: "تسوق" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">مكافآت الشركاء</h1>
        <p className="text-gray-600 mb-6">استبدل نقاطك بمكافآت حصرية من شركائنا المميزين.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerRewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{reward.partner}</span>
                  <Badge>{reward.category}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Gift className="h-5 w-5 ml-2 text-primary" />
                  <p>{reward.reward}</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">{reward.points} نقطة مطلوبة</p>
                <div className="flex justify-between items-center">
                  <Button>استبدال المكافأة</Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Handshake className="h-6 w-6 ml-2" />
              انضم كشريك
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">هل ترغب في أن تصبح شريكًا وتقديم مكافآت لعملائنا؟ انضم إلى برنامج الشراكة الآن!</p>
            <Button>تعرف على المزيد</Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerRewards;
