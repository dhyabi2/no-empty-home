import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ThumbsUp } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardRatings = () => {
  const rewards = [
    { id: 1, name: "قهوة مجانية", rating: 4.5, reviews: 120 },
    { id: 2, name: "قسيمة خصم 10%", rating: 3.8, reviews: 85 },
    { id: 3, name: "تذكرة سينما", rating: 4.2, reviews: 150 },
    { id: 4, name: "بطاقة هدايا", rating: 4.7, reviews: 200 },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">تقييمات المكافآت</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle>{reward.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  {renderStars(reward.rating)}
                  <span className="mr-2 text-gray-600">{reward.rating.toFixed(1)}</span>
                </div>
                <p className="text-sm text-gray-500">{reward.reviews} تقييم</p>
                <div className="mt-4 flex items-center">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">يوصي به 95% من المستخدمين</span>
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

export default RewardRatings;
