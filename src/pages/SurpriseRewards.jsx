import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurpriseRewards = () => {
  const surpriseRewards = [
    { id: 1, name: "Mystery Discount", description: "Unlock a surprise discount on your next purchase!" },
    { id: 2, name: "Bonus Points", description: "Claim a random amount of bonus points!" },
    { id: 3, name: "Secret Gift", description: "Redeem a mystery gift from one of our partner shops!" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Surprise Rewards</h1>
        <p className="text-gray-600 mb-6">Unlock random bonuses and exciting rewards!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surpriseRewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="mr-2 h-5 w-5" />
                  {reward.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{reward.description}</p>
                <Button className="w-full">Claim Reward</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SurpriseRewards;