import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Calendar, ChevronRight } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BirthdayRewards = () => {
  const birthdayRewards = [
    { id: 1, title: "Free Birthday Coffee", description: "Enjoy a free coffee on your birthday", shop: "Coffee Haven" },
    { id: 2, title: "20% Off Birthday Purchase", description: "Get 20% off any purchase on your birthday", shop: "Fashion Boutique" },
    { id: 3, title: "Birthday Dessert", description: "Complimentary dessert with any meal on your birthday", shop: "Gourmet Restaurant" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Birthday Rewards</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Your Birthday
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">September 15</p>
            <p className="text-sm text-gray-500">Make sure to claim your birthday rewards!</p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {birthdayRewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="mr-2 h-5 w-5" />
                  {reward.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{reward.description}</p>
                <p className="text-sm font-semibold mb-4">{reward.shop}</p>
                <Link to={`/rewards/${reward.id}`}>
                  <Button className="w-full">
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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