import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Gift } from "lucide-react";

const RewardShowcase = () => {
  // Dummy data for earned rewards
  const earnedRewards = [
    { id: 1, name: "Gold Member", icon: <Trophy className="h-6 w-6 text-yellow-500" />, date: "2024-03-15" },
    { id: 2, name: "5-Star Reviewer", icon: <Star className="h-6 w-6 text-blue-500" />, date: "2024-02-28" },
    { id: 3, name: "Big Spender", icon: <Gift className="h-6 w-6 text-green-500" />, date: "2024-01-10" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reward Showcase</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {earnedRewards.map((reward) => (
            <Card key={reward.id} className="flex flex-col items-center p-4">
              {reward.icon}
              <h3 className="mt-2 font-semibold">{reward.name}</h3>
              <Badge variant="secondary" className="mt-1">
                Earned on {new Date(reward.date).toLocaleDateString()}
              </Badge>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardShowcase;
