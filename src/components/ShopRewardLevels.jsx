import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

const ShopRewardLevels = ({ shopName }) => {
  const rewardLevels = [
    { level: "Bronze", points: 100, perks: ["5% discount on all purchases"] },
    { level: "Silver", points: 500, perks: ["10% discount on all purchases", "Free coffee once a month"] },
    { level: "Gold", points: 1000, perks: ["15% discount on all purchases", "Free coffee weekly", "Priority customer service"] },
    { level: "Platinum", points: 2000, perks: ["20% discount on all purchases", "Free coffee daily", "Exclusive event invitations"] },
  ];

  const currentPoints = 750; // This would be fetched from user data in a real app

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reward Levels for {shopName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Your current points: {currentPoints}</p>
        {rewardLevels.map((level, index) => (
          <div key={level.level} className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{level.level}</h3>
              <span>{level.points} points</span>
            </div>
            <Progress value={(currentPoints / level.points) * 100} className="mb-2" />
            <ul className="list-disc list-inside">
              {level.perks.map((perk, perkIndex) => (
                <li key={perkIndex}>{perk}</li>
              ))}
            </ul>
            {currentPoints >= level.points && (
              <div className="mt-2 text-green-600 flex items-center">
                <Star className="w-4 h-4 mr-1" />
                <span>Achieved</span>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ShopRewardLevels;