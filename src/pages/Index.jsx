import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Gift, Star, Bell, Search, User, HelpCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Loyalty App</h1>
          <div className="flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/notifications">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/favorites">
              <Button variant="ghost" size="icon">
                <Star className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
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
              <li><Link to="/"><Button variant="link">Home</Button></Link></li>
              <li><Link to="/search"><Button variant="link">Search</Button></Link></li>
              <li><Link to="/notifications"><Button variant="link">Notifications</Button></Link></li>
              <li><Link to="/favorites"><Button variant="link">Favorites</Button></Link></li>
              <li><Link to="/profile"><Button variant="link">Profile</Button></Link></li>
              <li><Link to="/help-support"><Button variant="link">Help & Support</Button></Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
