import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

const SocialSharing = () => {
  const dummyReward = {
    name: "50% Off Coffee",
    points: 500,
    description: "Get 50% off your next coffee purchase!",
  };

  const dummyAchievement = {
    name: "Coffee Connoisseur",
    description: "Visited 10 different coffee shops",
    badge: "☕",
  };

  const handleShare = (platform) => {
    // In a real app, this would open the native share dialog or link to the platform
    console.log(`Sharing on ${platform}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Share2 className="mr-2" />
          Share Your Rewards and Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Share Your Latest Reward</h3>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium">{dummyReward.name}</h4>
                <p className="text-sm text-gray-500">{dummyReward.description}</p>
                <p className="text-sm font-semibold mt-2">{dummyReward.points} points</p>
              </CardContent>
            </Card>
            <div className="flex space-x-2 mt-2">
              <Button size="sm" onClick={() => handleShare('facebook')}>
                <Facebook className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button size="sm" onClick={() => handleShare('twitter')}>
                <Twitter className="mr-2 h-4 w-4" />
                Tweet
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Share Your Latest Achievement</h3>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium">{dummyAchievement.name}</h4>
                <p className="text-sm text-gray-500">{dummyAchievement.description}</p>
                <p className="text-2xl mt-2">{dummyAchievement.badge}</p>
              </CardContent>
            </Card>
            <div className="flex space-x-2 mt-2">
              <Button size="sm" onClick={() => handleShare('linkedin')}>
                <Linkedin className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button size="sm" onClick={() => handleShare('twitter')}>
                <Twitter className="mr-2 h-4 w-4" />
                Tweet
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialSharing;