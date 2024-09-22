import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Repeat } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardSubscription = () => {
  const subscriptions = [
    { id: 1, name: "Monthly Coffee Pack", price: 500, period: "Monthly" },
    { id: 2, name: "Quarterly Dining Experience", price: 1500, period: "Quarterly" },
    { id: 3, name: "Annual VIP Status", price: 5000, period: "Yearly" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Reward Subscriptions</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((subscription) => (
            <Card key={subscription.id}>
              <CardHeader>
                <CardTitle>{subscription.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{subscription.price} points per {subscription.period.toLowerCase()}</p>
                <Select className="mb-4">
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 {subscription.period}s</SelectItem>
                    <SelectItem value="6">6 {subscription.period}s</SelectItem>
                    <SelectItem value="12">12 {subscription.period}s</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full" onClick={() => alert(`Subscribed to ${subscription.name}`)}>
                  <Repeat className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
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
