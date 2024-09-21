import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '../contexts/AuthContext';
import CustomKeyboard from './CustomKeyboard';

const RewardRedemption = () => {
  const { user, redeemPoints } = useAuth();
  const [selectedReward, setSelectedReward] = useState(null);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const rewards = [
    { id: 1, name: "Free Coffee", points: 100 },
    { id: 2, name: "10% Discount", points: 200 },
    { id: 3, name: "Free Pastry", points: 150 },
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Redeem Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Your current points: {user.points}</p>
        <div className="space-y-4">
          {rewards.map((reward) => (
            <Button
              key={reward.id}
              onClick={() => setSelectedReward(reward)}
              variant={selectedReward?.id === reward.id ? "default" : "outline"}
              className="w-full justify-between"
            >
              <span>{reward.name}</span>
              <span>{reward.points} points</span>
            </Button>
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
