import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '../contexts/AuthContext';
import CustomKeyboard from './CustomKeyboard';
import { Heart } from "lucide-react";

const RewardRedemption = () => {
  const { user, redeemPoints } = useAuth();
  const [selectedReward, setSelectedReward] = useState(null);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const rewards = [
    { id: 1, name: "Free Coffee", points: 100, icon: "☕" },
    { id: 2, name: "10% Discount", points: 200, icon: "🏷️" },
    { id: 3, name: "Free Pastry", points: 150, icon: "🥐" },
  ];

  const handleRedemption = () => {
    if (selectedReward && user.points >= selectedReward.points) {
      setShowKeyboard(true);
    } else {
      alert("Not enough points to redeem this reward.");
    }
  };

  const handleEnterCode = (code) => {
    // In a real app, you'd validate the code here
    redeemPoints(selectedReward.points);
    alert(`You have successfully redeemed ${selectedReward.name} with code: ${code}`);
    setSelectedReward(null);
    setShowKeyboard(false);
  };

  const addToWishlist = (reward) => {
    // In a real app, you'd implement the logic to add the reward to the wishlist
    alert(`${reward.name} has been added to your wishlist!`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Redeem Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Your current points: {user.points}</p>
        <div className="space-y-4">
          {rewards.map((reward) => (
            <Card
              key={reward.id}
              className={`cursor-pointer transition-all ${selectedReward?.id === reward.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedReward(reward)}
            >
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold">{reward.name}</h3>
                  <p className="text-sm text-gray-500">{reward.points} points</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToWishlist(reward);
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl">{reward.icon}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedReward && !showKeyboard && (
          <Button
            onClick={handleRedemption}
            className="mt-4 w-full"
            disabled={user.points < selectedReward.points}
          >
            Redeem {selectedReward.name}
          </Button>
        )}
        {showKeyboard && (
          <div className="mt-4">
            <CustomKeyboard
              onEnter={handleEnterCode}
              onClear={() => setShowKeyboard(false)}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RewardRedemption;
