import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Gift, ThumbsUp, ThumbsDown } from "lucide-react";

const RewardConcierge = () => {
  // Dummy data for personalized recommendations
  const recommendations = [
    { id: 1, title: "50% Off Coffee", points: 100, shop: "Coffee Haven" },
    { id: 2, title: "Free Movie Ticket", points: 500, shop: "CineWorld" },
    { id: 3, title: "15% Discount on Books", points: 200, shop: "Bookworm's Paradise" },
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="mr-2" />
          Reward Concierge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">
          Here are some personalized reward recommendations for you:
        </p>
        <div className="space-y-4">
          {recommendations.map((reward) => (
            <Card key={reward.id}>
              <CardContent className="flex items-center p-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${reward.shop}`} alt={reward.shop} />
                  <AvatarFallback>{reward.shop[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <h3 className="font-semibold">{reward.title}</h3>
                  <p className="text-sm text-gray-500">{reward.points} points • {reward.shop}</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="w-full mt-4">View More Recommendations</Button>
      </CardContent>
    </Card>
  );
};

export default RewardConcierge;