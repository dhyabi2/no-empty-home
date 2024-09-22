import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardRatings = () => {
  const [rewards] = useState([
    { id: 1, name: "Free Coffee", rating: 4.5, totalRatings: 120 },
    { id: 2, name: "10% Discount", rating: 4.2, totalRatings: 85 },
    { id: 3, name: "Movie Ticket", rating: 4.8, totalRatings: 200 },
    { id: 4, name: "Gift Card", rating: 4.0, totalRatings: 150 },
  ]);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Ratings</h1>
        <div className="space-y-4">
          {rewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle>{reward.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  {renderStars(reward.rating)}
                  <span className="ml-2 text-gray-600">{reward.rating.toFixed(1)}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{reward.totalRatings} ratings</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Helpful
                  </Button>
                  <Button variant="outline" size="sm">
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    Not Helpful
                  </Button>
                </div>
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