import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardRatings = () => {
  const rewards = [
    { id: 1, name: "Free Coffee", description: "Get a free coffee of your choice", currentRating: 4.5 },
    { id: 2, name: "10% Off Meal", description: "Enjoy 10% off your next meal", currentRating: 3.8 },
    { id: 3, name: "Movie Ticket", description: "Free movie ticket for any show", currentRating: 4.2 },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${star <= Math.round(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Rate Rewards</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle>{reward.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{reward.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span>Current Rating:</span>
                  <StarRating rating={reward.currentRating} />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span>Your Rating:</span>
                  <StarRating rating={0} />
                </div>
                <Button className="w-full" onClick={() => alert(`Thank you for rating ${reward.name}!`)}>
                  Submit Rating
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardRatings;
