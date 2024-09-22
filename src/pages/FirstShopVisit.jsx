import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Coffee, Star } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const FirstShopVisit = () => {
  const shopDetails = {
    name: "Coffee Haven",
    address: "123 Main St, Cityville",
    rating: 4.5,
    checkInPoints: 50,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your First Shop Visit</h1>
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Coffee className="mr-2 h-6 w-6" />
              {shopDetails.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="mr-2 h-4 w-4" />
              {shopDetails.address}
            </div>
            <div className="flex items-center">
              <Star className="mr-2 h-4 w-4 text-yellow-400" />
              <span>{shopDetails.rating} / 5</span>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-semibold">Check-in Bonus:</p>
              <p className="text-2xl font-bold text-primary">{shopDetails.checkInPoints} Points</p>
            </div>
            <Button className="w-full">Check In Now</Button>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Personalized Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Try our Signature Latte</h3>
                <p className="text-sm text-gray-600">Perfect for your first visit!</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Join our Loyalty Program</h3>
                <p className="text-sm text-gray-600">Earn double points on your next visit!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FirstShopVisit;
