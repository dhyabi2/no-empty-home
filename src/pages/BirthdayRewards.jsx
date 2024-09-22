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
      title: "Free Birthday Coffee",
      description: "Enjoy a complimentary coffee of your choice on your birthday!",
      points: 0,
    },
    {
      id: 2,
      title: "Birthday Discount",
      description: "Get 20% off on any purchase during your birthday month.",
      points: 100,
    },
    {
      id: 3,
      title: "Exclusive Birthday Gift",
      description: "Receive a special gift from our premium collection.",
      points: 500,
    },
  ];

  const handleRedeemReward = (rewardId) => {
    alert(`You have redeemed the birthday reward with ID: ${rewardId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Birthday Rewards</h1>
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="mr-2 h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">Your Birthday: May 15</span>
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
                  <Gift className="mr-2 h-5 w-5 text-primary" />
                  {reward.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{reward.points} points</span>
                  <Button onClick={() => handleRedeemReward(reward.id)}>
                    Redeem
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
