import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Tabs defaultValue="set-goal">
          <TabsList>
            <TabsTrigger value="set-goal">Set Goal</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          <TabsContent value="set-goal">
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
              <Button type="submit">Set Goal</Button>
            </form>
          </TabsContent>
          <TabsContent value="progress">
            <div>
              <Label>Progress</Label>
              <Progress value={(currentPoints / parseInt(pointsNeeded || '1')) * 100} className="mt-2" />
              <p className="text-sm text-gray-500 mt-1">
                {currentPoints} / {pointsNeeded || '0'} points
              </p>
            </div>
            <div className="mt-4">
              <Label>Estimated Time to Reach Goal</Label>
              <p className="text-sm font-medium">{estimatedTimeToReach}</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RewardPlanner;
