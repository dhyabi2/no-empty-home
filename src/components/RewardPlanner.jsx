import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const RewardPlanner = () => {
  const [goal, setGoal] = useState('');
  const [pointsNeeded, setPointsNeeded] = useState('');

  // Dummy data
  const currentPoints = 500;
  const estimatedTimeToReach = '2 months';

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reward Planner</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="rewardGoal">Reward Goal</Label>
            <Input
              id="rewardGoal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g., Free Coffee for a Month"
            />
          </div>
          <div>
            <Label htmlFor="pointsNeeded">Points Needed</Label>
            <Input
              id="pointsNeeded"
              type="number"
              value={pointsNeeded}
              onChange={(e) => setPointsNeeded(e.target.value)}
              placeholder="Enter points needed"
            />
          </div>
          <div>
            <Label>Progress</Label>
            <Progress value={(currentPoints / parseInt(pointsNeeded || '1')) * 100} className="mt-2" />
            <p className="text-sm text-gray-500 mt-1">
              {currentPoints} / {pointsNeeded || '0'} points
            </p>
          </div>
          <div>
            <Label>Estimated Time to Reach Goal</Label>
            <p className="text-sm font-medium">{estimatedTimeToReach}</p>
          </div>
          <Button type="submit">Set Goal</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RewardPlanner;