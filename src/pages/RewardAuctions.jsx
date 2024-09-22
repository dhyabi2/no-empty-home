import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, Clock } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardAuctions = () => {
  const auctions = [
    { id: 1, name: "Luxury Weekend Getaway", currentBid: 5000, endTime: "2024-04-15T18:00:00" },
    { id: 2, name: "VIP Concert Experience", currentBid: 3500, endTime: "2024-04-20T20:00:00" },
    { id: 3, name: "Limited Edition Smart Watch", currentBid: 2000, endTime: "2024-04-25T12:00:00" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Auctions</h1>
        <p className="text-gray-600 mb-6">Bid on exclusive rewards using your loyalty points!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <Card key={auction.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gavel className="mr-2 h-5 w-5" />
                  {auction.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">Current Bid: {auction.currentBid} points</p>
                <p className="text-sm text-gray-500 mb-4">
                  <Clock className="inline-block h-4 w-4 mr-1" />
                  Ends: {new Date(auction.endTime).toLocaleString()}
                </p>
                <Button className="w-full">Place Bid</Button>
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