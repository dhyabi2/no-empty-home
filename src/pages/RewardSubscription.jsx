import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardSubscription = () => {
  const subscriptions = [
    { id: 1, name: "Basic", price: "$9.99/month", benefits: ["10% bonus points", "Early access to sales"] },
    { id: 2, name: "Premium", price: "$19.99/month", benefits: ["20% bonus points", "Free shipping", "Exclusive rewards"] },
    { id: 3, name: "VIP", price: "$29.99/month", benefits: ["30% bonus points", "Priority customer service", "Monthly surprise gift"] },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Subscriptions</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptions.map((sub) => (
            <Card key={sub.id}>
              <CardHeader>
                <CardTitle>{sub.name}</CardTitle>
                <Badge>{sub.price}</Badge>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4">
                  {sub.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
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
