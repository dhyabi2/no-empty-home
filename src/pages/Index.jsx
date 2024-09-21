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
              <p className="text-3xl font-bold mb-2">1,250 points</p>
              <p className="text-sm text-gray-500">Next reward: 250 points away</p>
              <div className="mt-4 bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "50% Off Coffee", shop: "Cafe Delight", expires: "3 days left" },
              { title: "Buy 1 Get 1 Free", shop: "Burger Haven", expires: "1 week left" },
              { title: "20% Off Books", shop: "Bookworm's Paradise", expires: "5 days left" }
            ].map((offer, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{offer.shop}</p>
                  <p className="text-xs text-red-500 mt-2">{offer.expires}</p>
                  <Button className="mt-4 w-full">Redeem Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Nearby Shops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Coffee Haven", distance: "0.5 km", category: "Cafe" },
              { name: "Tech Gadgets", distance: "1.2 km", category: "Electronics" },
              { name: "Fresh Grocers", distance: "0.8 km", category: "Supermarket" }
            ].map((shop, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{shop.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{shop.category}</p>
                  <p className="text-xs mt-2">
                    <MapPin className="inline-block h-4 w-4 mr-1" />
                    {shop.distance}
                  </p>
                  <Button className="mt-4 w-full">View Offers</Button>
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
