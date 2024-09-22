import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnerRewards = () => {
  const partnerRewards = [
    { id: 1, name: "10% off at BookStore", partner: "BookStore", points: 200 },
    { id: 2, name: "Free coffee at CoffeeCo", partner: "CoffeeCo", points: 150 },
    { id: 3, name: "$5 off at MovieTheater", partner: "MovieTheater", points: 300 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Partner Rewards</h1>
        <p className="text-gray-600 mb-6">Explore exclusive rewards from our partners!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerRewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Handshake className="mr-2 h-5 w-5" />
                  {reward.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Partner: {reward.partner}</p>
                <p className="font-semibold mb-4">{reward.points} points</p>
                <Button className="w-full">Redeem Reward</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerRewards;