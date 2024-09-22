import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeReward from '../components/WelcomeReward';
import { Link } from 'react-router-dom';
import { MapPin, Gift, Coffee } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Loyalty App</h1>
        
        <WelcomeReward />
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Nearby Shops
              </h2>
              <p className="text-gray-600 mb-4">Discover shops around you and start earning points!</p>
              <Link to="/nearby-shops">
                <Button>Explore Nearby</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Gift className="mr-2 h-5 w-5" />
                Available Rewards
              </h2>
              <p className="text-gray-600 mb-4">Check out exciting rewards you can redeem with your points.</p>
              <Link to="/rewards">
                <Button>View Rewards</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Coffee className="mr-2 h-5 w-5" />
                First Shop Visit
              </h2>
              <p className="text-gray-600 mb-4">Ready for your first shop visit? Earn bonus points!</p>
              <Link to="/first-shop-visit">
                <Button>Start Visit</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
