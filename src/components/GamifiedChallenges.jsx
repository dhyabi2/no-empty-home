import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Target, X } from "lucide-react";

const GamifiedChallenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    {
      id: 1,
      name: "Coffee Explorer",
      description: "Visit 5 different coffee shops this week",
      progress: 3,
      total: 5,
      reward: "100 bonus points",
      type: "weekly",
    },
    {
      id: 2,
      name: "Lunch Break Champion",
      description: "Make 10 purchases during lunch hours this month",
      progress: 7,
      total: 10,
      reward: "Free dessert",
      type: "monthly",
    },
    {
      id: 3,
      name: "Early Bird",
      description: "Make a purchase before 9 AM",
      progress: 0,
      total: 1,
      reward: "50% off breakfast item",
      type: "daily",
    },
  ];

  const handleViewDetails = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleCloseDetails = () => {
    setSelectedChallenge(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2" />
          Gamified Challenges
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{challenge.name}</h3>
                  <Badge variant={challenge.type === 'daily' ? 'default' : challenge.type === 'weekly' ? 'secondary' : 'outline'}>
                    {challenge.type === 'daily' && <Calendar className="mr-1 h-3 w-3" />}
                    {challenge.type === 'weekly' && <Calendar className="mr-1 h-3 w-3" />}
                    {challenge.type === 'monthly' && <Calendar className="mr-1 h-3 w-3" />}
                    {challenge.type}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 mb-2">{challenge.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress: {challenge.progress}/{challenge.total}</span>
                  <span className="text-sm text-gray-500">Reward: {challenge.reward}</span>
                </div>
                <Progress value={(challenge.progress / challenge.total) * 100} className="mb-2" />
                <Button className="w-full" onClick={() => handleViewDetails(challenge)}>
                  <Target className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
      {selectedChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{selectedChallenge.name}</span>
                <Button variant="ghost" size="icon" onClick={handleCloseDetails}>
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{selectedChallenge.description}</p>
              <p className="mb-2">Progress: {selectedChallenge.progress}/{selectedChallenge.total}</p>
              <Progress value={(selectedChallenge.progress / selectedChallenge.total) * 100} className="mb-4" />
              <p className="font-semibold">Reward: {selectedChallenge.reward}</p>
              <p className="text-sm text-gray-500 mt-2">Keep going! You're making great progress.</p>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
};

export default GamifiedChallenges;
