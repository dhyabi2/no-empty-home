import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Share2 } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardShowcase = () => {
  const showcaseItems = [
    { id: 1, name: "Gold Member Badge", description: "Achieved for earning 10,000 points", icon: "🏅" },
    { id: 2, name: "Coffee Connoisseur", description: "Redeemed 50 free coffees", icon: "☕" },
    { id: 3, name: "Shopping Spree Champion", description: "Spent over $1000 in a single day", icon: "🛍️" },
    { id: 4, name: "Loyal Customer Trophy", description: "Member for 5 years", icon: "🏆" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Showcase</h1>
        <p className="text-gray-600 mb-6">Display your hard-earned rewards and achievements!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl mb-4">{item.icon}</p>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">Earned</Badge>
                  <button className="text-blue-500 hover:text-blue-600">
                    <Share2 className="h-5 w-5" />
                  </button>
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

export default RewardShowcase;