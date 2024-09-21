import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star, Clock, Phone, Globe } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShopProfile = () => {
  const { id } = useParams();

  // Mock data for the shop (in a real app, this would be fetched from an API)
  const shop = {
    id: id,
    name: "Coffee Haven",
    category: "Cafe",
    rating: 4.5,
    address: "123 Main St, Cityville",
    phone: "+1 234 567 8900",
    website: "www.coffeehaven.com",
    hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM",
    description: "A cozy cafe offering a wide variety of coffee blends and pastries.",
    offers: [
      { id: 1, title: "10% off on all beverages", validUntil: "2024-04-30" },
      { id: 2, title: "Buy 2 pastries, get 1 free", validUntil: "2024-05-15" },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{shop.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">{shop.category}</p>
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span>{shop.rating}</span>
            </div>
            <p className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              {shop.address}
            </p>
            <p className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2" />
              {shop.phone}
            </p>
            <p className="flex items-center mb-2">
              <Globe className="h-5 w-5 mr-2" />
              {shop.website}
            </p>
            <p className="flex items-center mb-4">
              <Clock className="h-5 w-5 mr-2" />
              {shop.hours}
            </p>
            <p className="mb-4">{shop.description}</p>
            <Button>Join Loyalty Program</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Offers</CardTitle>
          </CardHeader>
          <CardContent>
            {shop.offers.map((offer) => (
              <div key={offer.id} className="mb-4 last:mb-0">
                <h3 className="font-semibold">{offer.title}</h3>
                <p className="text-sm text-gray-500">Valid until: {offer.validUntil}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ShopProfile;