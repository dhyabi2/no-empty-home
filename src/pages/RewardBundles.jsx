import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardBundles = () => {
  const bundles = [
    { id: 1, name: "Coffee Lover's Bundle", description: "5 free coffees + 1 pastry", points: 500 },
    { id: 2, name: "Movie Night Bundle", description: "2 movie tickets + large popcorn", points: 750 },
    { id: 3, name: "Spa Day Bundle", description: "60-min massage + facial treatment", points: 1000 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Bundles</h1>
        <p className="text-gray-600 mb-6">Get more value with our curated reward bundles!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <Card key={bundle.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  {bundle.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{bundle.description}</p>
                <p className="font-semibold mb-4">{bundle.points} points</p>
                <Button className="w-full">Redeem Bundle</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardBundles;
