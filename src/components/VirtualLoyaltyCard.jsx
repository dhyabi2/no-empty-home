import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, Zap, Edit } from "lucide-react";

const VirtualLoyaltyCard = () => {
  const dummyUser = {
    name: "John Doe",
    cardNumber: "1234 5678 9012 3456",
    points: 1500,
    tier: "Gold",
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <CreditCard className="mr-2" />
            Virtual Loyalty Card
          </span>
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{dummyUser.name}</h2>
              <p className="text-sm opacity-75">{dummyUser.cardNumber}</p>
            </div>
            <Badge className="bg-white text-purple-500">{dummyUser.tier}</Badge>
          </div>
          <div className="mt-4">
            <p className="text-sm opacity-75">Current Points</p>
            <p className="text-3xl font-bold">{dummyUser.points}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Button className="w-full">
            <Smartphone className="mr-2 h-4 w-4" />
            Scan to Earn Points
          </Button>
          <Button variant="outline" className="w-full">
            <Zap className="mr-2 h-4 w-4" />
            View Point History
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VirtualLoyaltyCard;