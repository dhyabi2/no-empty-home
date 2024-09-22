import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Gift, ArrowRight } from "lucide-react";

const RedeemPoints = () => {
  const { user, redeemPoints } = useAuth();
  const [selectedReward, setSelectedReward] = useState(null);

  const rewards = [
    { id: 1, name: "Free Coffee", points: 100, icon: "☕" },
    { id: 2, name: "10% Discount", points: 200, icon: "🏷️" },
    { id: 3, name: "Free Pastry", points: 150, icon: "🥐" },
    { id: 4, name: "Priority Queue", points: 50, icon: "🚀" },
    { id: 5, name: "Exclusive Event Access", points: 500, icon: "🎉" },
  ];

  const handleRedemption = () => {
    if (selectedReward && user.points >= selectedReward.points) {
      redeemPoints(selectedReward.points);
      alert(`You have successfully redeemed ${selectedReward.name}!`);
      setSelectedReward(null);
    } else {
      alert("Not enough points to redeem this reward.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Redeem Your Points</h1>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-xl font-semibold">Your current points: {user?.points || 0}</p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <Card 
              key={reward.id} 
              className={`cursor-pointer transition-all ${selectedReward?.id === reward.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedReward(reward)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{reward.name}</span>
                  <span className="text-2xl">{reward.icon}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{reward.points} points</p>
                <Button 
                  className="mt-4 w-full"
                  disabled={user?.points < reward.points}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedReward(reward);
                  }}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedReward && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Confirm Redemption</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">You are about to redeem: <strong>{selectedReward.name}</strong> for <strong>{selectedReward.points} points</strong></p>
              <Button onClick={handleRedemption} className="w-full">
                <Gift className="mr-2 h-4 w-4" /> Redeem Now
              </Button>
            </CardContent>
          </Card>
        )}
        <div className="mt-8 text-center">
          <Button variant="link" className="text-primary">
            View Redemption History <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RedeemPoints;