import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Gavel, Clock } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardAuctions = () => {
  const auctions = [
    { id: 1, name: "Luxury Spa Day", currentBid: 5000, timeLeft: "2h 30m" },
    { id: 2, name: "VIP Concert Tickets", currentBid: 7500, timeLeft: "1h 15m" },
    { id: 3, name: "Gourmet Dining Experience", currentBid: 3000, timeLeft: "3h 45m" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Reward Auctions</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {auctions.map((auction) => (
            <Card key={auction.id}>
              <CardHeader>
                <CardTitle>{auction.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Gavel className="mr-2 h-4 w-4" />
                    <span>Current Bid: {auction.currentBid} points</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{auction.timeLeft}</span>
                  </div>
                </div>
                <Input type="number" placeholder="Enter your bid" className="mb-2" />
                <Button className="w-full" onClick={() => alert(`Bid placed for ${auction.name}`)}>
                  Place Bid
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

export default RewardAuctions;
