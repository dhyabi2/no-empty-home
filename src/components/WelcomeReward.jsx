import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Share2 } from "lucide-react";
import Confetti from 'react-confetti';

const WelcomeReward = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Welcome Reward</span>
          <Gift className="h-6 w-6 text-primary" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Congratulations!</h2>
          <p className="text-gray-600">You've earned a welcome reward of</p>
          <p className="text-3xl font-bold text-primary mt-2">500 Points</p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button className="flex-1">
            <Gift className="mr-2 h-4 w-4" />
            Claim Reward
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      </CardContent>
    </Card>
  );
};

export default WelcomeReward;