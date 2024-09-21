import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Shimmer from './Shimmer';

const RewardOverview = ({ isLoading, user, handleEarnReward }) => {
  if (isLoading) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle><Shimmer width="200px" height="24px" /></CardTitle>
        </CardHeader>
        <CardContent>
          <Shimmer width="100%" height="20px" className="mb-4" />
          <Shimmer width="100%" height="24px" />
        </CardContent>
      </Card>
    );
  }

  const pointsToNextReward = 1000 - (user?.points % 1000);
  const progress = ((user?.points % 1000) / 1000) * 100;

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Reward Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold mb-2">{user?.points || 0} points</p>
        <p className="text-sm text-gray-500 mb-4">{pointsToNextReward} points to next reward</p>
        <Progress value={progress} className="mb-4" />
        <Button onClick={handleEarnReward}>Earn Points</Button>
      </CardContent>
    </Card>
  );
};

export default RewardOverview;
