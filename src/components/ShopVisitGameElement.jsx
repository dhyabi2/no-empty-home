import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const ShopVisitGameElement = () => {
  // Dummy data for demonstration
  const visitCount = 7;
  const nextRewardAt = 10;
  const currentBadge = "Silver Shopper";
  const nextBadge = "Gold Patron";

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
          Shop Visit Challenge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Visit Progress</p>
          <Progress value={(visitCount / nextRewardAt) * 100} className="w-full" />
          <p className="text-xs text-gray-500 mt-1">{visitCount} / {nextRewardAt} visits</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Current Badge</p>
            <Badge variant="secondary" className="mt-1">{currentBadge}</Badge>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Next Badge</p>
            <Badge variant="outline" className="mt-1">{nextBadge}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShopVisitGameElement;