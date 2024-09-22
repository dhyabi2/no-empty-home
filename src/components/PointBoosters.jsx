import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Clock } from "lucide-react";

const PointBoosters = () => {
  // Dummy data for demonstration
  const boosters = [
    { id: 1, name: "Double Points Weekend", multiplier: 2, duration: "48 hours", startTime: "Fri, 6:00 PM" },
    { id: 2, name: "Happy Hour Boost", multiplier: 1.5, duration: "2 hours", startTime: "Daily, 2:00 PM" },
    { id: 3, name: "New Shop Bonus", multiplier: 3, duration: "1 hour", startTime: "Your first visit" },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2 h-5 w-5 text-yellow-500" />
          Point Boosters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {boosters.map((booster) => (
            <Card key={booster.id}>
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold">{booster.name}</h3>
                  <p className="text-sm text-gray-500">
                    {booster.multiplier}x points for {booster.duration}
                  </p>
                  <div className="flex items-center mt-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    Starts: {booster.startTime}
                  </div>
                </div>
                <Button size="sm">Activate</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PointBoosters;
