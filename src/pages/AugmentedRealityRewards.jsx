import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Camera, Gift } from "lucide-react";

const AugmentedRealityRewards = () => {
  const arRewards = [
    { id: 1, name: "Hidden Discount", description: "Scan the store to find a hidden 20% off coupon" },
    { id: 2, name: "Virtual Treasure Hunt", description: "Collect virtual coins around the mall for bonus points" },
    { id: 3, name: "AR Product Preview", description: "See how products look in your space before purchasing" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Augmented Reality Rewards</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              AR Reward Scanner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Use your camera to scan for augmented reality rewards in participating stores and locations.
            </p>
            <Button className="w-full">
              Open AR Scanner
            </Button>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold mb-4">Available AR Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arRewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="mr-2 h-5 w-5" />
                  {reward.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{reward.description}</p>
                <Button variant="outline" className="w-full">Start Experience</Button>
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