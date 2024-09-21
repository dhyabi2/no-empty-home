import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Gift, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Loyalty App</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <MapPin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Gift className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Star className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Reward Overview</h2>
          <Card>
            <CardHeader>
              <CardTitle>Your Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You have 150 points</p>
              <p>Next reward: 50 points away</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Nearby Shops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((shop) => (
              <Card key={shop}>
                <CardHeader>
                  <CardTitle>Shop {shop}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Button className="mt-2">View Offers</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-sm mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="link">Home</Button></li>
              <li><Button variant="link">Offers</Button></li>
              <li><Button variant="link">Profile</Button></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
