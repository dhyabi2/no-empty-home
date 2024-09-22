import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";

const PointBoosters = () => {
  const boosters = [
    { id: 1, name: "2x Points Weekend", description: "Earn double points on all purchases this weekend", duration: "48 hours" },
    { id: 2, name: "Category Boost", description: "3x points on Electronics purchases", duration: "1 week" },
    { id: 3, name: "Shop Local Bonus", description: "Extra 500 points when you shop at local businesses", duration: "1 month" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2 h-5 w-5" />
          Point Boosters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {boosters.map((booster) => (
            <Card key={booster.id}>
              <CardContent className="p-4">
                <h3 className="font-semibold">{booster.name}</h3>
                <p className="text-sm text-gray-500">{booster.description}</p>
                <p className="text-xs text-gray-400 mt-1">Duration: {booster.duration}</p>
                <Button className="w-full mt-2">Activate Booster</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PointBoosters;