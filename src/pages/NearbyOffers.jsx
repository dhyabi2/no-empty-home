import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Tag } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NearbyOffers = () => {
  // Dummy data for nearby offers
  const nearbyOffers = [
    { id: 1, title: "50% Off Coffee", shop: "Coffee Haven", distance: "0.5 km" },
    { id: 2, title: "Buy 1 Get 1 Free Pastry", shop: "Bakery Delight", distance: "0.8 km" },
    { id: 3, title: "20% Off Books", shop: "Bookworm's Paradise", distance: "1.2 km" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Nearby Offers</h1>
        <div className="mb-6">
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map View Placeholder</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyOffers.map((offer) => (
            <Card key={offer.id}>
              <CardHeader>
                <CardTitle>{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">
                  <Tag className="inline-block h-4 w-4 mr-1" />
                  {offer.shop}
                </p>
                <p className="text-sm mb-4">
                  <MapPin className="inline-block h-4 w-4 mr-1" />
                  {offer.distance}
                </p>
                <Button className="w-full">View Offer</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NearbyOffers;
