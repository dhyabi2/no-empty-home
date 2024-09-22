import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Share2 } from "lucide-react";

const WelcomeReward = () => {
  const handleClaim = () => {
    alert("Welcome reward claimed!");
  };

  const handleShare = () => {
    alert("Sharing welcome reward!");
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="mr-2" />
          Welcome Reward
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Claim your welcome bonus of 100 points!</p>
        <div className="flex space-x-2">
          <Button onClick={handleClaim}>Claim Reward</Button>
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeReward;
