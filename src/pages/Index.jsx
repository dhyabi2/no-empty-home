import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Gift } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              { id: 1, title: "50% Off Coffee", shop: "Cafe Delight", expires: "3 days left" },
              { id: 2, title: "Buy 1 Get 1 Free", shop: "Burger Haven", expires: "1 week left" },
              { id: 3, title: "20% Off Books", shop: "Bookworm's Paradise", expires: "5 days left" }
            ].map((offer) => (
              <Card key={offer.id}>
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{offer.shop}</p>
                  <p className="text-xs text-red-500 mt-2">{offer.expires}</p>
                  <Link to={`/offers/${offer.id}`}>
                    <Button className="mt-4 w-full">View Offer</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Nearby Shops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: 1, name: "Coffee Haven", distance: "0.5 km", category: "Cafe" },
              { id: 2, name: "Tech Gadgets", distance: "1.2 km", category: "Electronics" },
              { id: 3, name: "Fresh Grocers", distance: "0.8 km", category: "Supermarket" }
            ].map((shop) => (
              <Card key={shop.id}>
                <CardHeader>
                  <CardTitle>{shop.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{shop.category}</p>
                  <p className="text-xs mt-2">
                    <MapPin className="inline-block h-4 w-4 mr-1" />
                    {shop.distance}
                  </p>
                  <Link to={`/shops/${shop.id}`}>
                    <Button className="mt-4 w-full">View Shop</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
