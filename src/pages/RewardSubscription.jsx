import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Repeat } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardSubscription = () => {
  const subscriptions = [
    { id: 1, name: "Coffee Lover", description: "Get a free coffee every week", price: 500, interval: "Monthly" },
    { id: 2, name: "Bookworm", description: "10% off on all book purchases", price: 750, interval: "Monthly" },
    { id: 3, name: "Fitness Fanatic", description: "One free gym session per month", price: 1000, interval: "Monthly" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Subscriptions</h1>
        <p className="text-gray-600 mb-6">Subscribe to these plans for recurring benefits!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptions.map((subscription) => (
            <Card key={subscription.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Repeat className="mr-2 h-5 w-5 text-primary" />
                  {subscription.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{subscription.description}</p>
                <p className="font-bold mb-2">{subscription.price} points {subscription.interval}</p>
                <Button className="w-full">Subscribe</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardSubscription;