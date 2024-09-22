import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Calendar, Star } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const BirthdayRewards = () => {
  const birthdayRewards = [
    {
      id: 1,
      title: "قهوة مجانية في عيد ميلادك",
      description: "استمتع بقهوة مجانية من اختيارك في يوم عيد ميلادك!",
      points: 0,
    },
    {
      id: 2,
      title: "خصم عيد الميلاد",
      description: "احصل على خصم 20٪ على أي مشتريات خلال شهر عيد ميلادك.",
      points: 100,
    },
    {
      id: 3,
      title: "هدية عيد ميلاد حصرية",
      description: "احصل على هدية خاصة من مجموعتنا الفاخرة.",
      points: 500,
    },
  ];

  const handleRedeemReward = (rewardId) => {
    alert(`لقد قمت باسترداد مكافأة عيد الميلاد برقم التعريف: ${rewardId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">مكافآت عيد الميلاد</h1>
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="ml-2 h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">عيد ميلادك: 15 مايو</span>
              </div>
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {birthdayRewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="ml-2 h-5 w-5 text-primary" />
                  {reward.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{reward.points} نقطة</span>
                  <Button onClick={() => handleRedeemReward(reward.id)}>
                    استرداد
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BirthdayRewards;
