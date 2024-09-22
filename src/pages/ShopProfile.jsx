import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Globe, Clock } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopRewardLevels from '../components/ShopRewardLevels';

const ShopProfile = () => {
  const shop = {
    id: 1,
    name: "Coffee Haven",
    category: "Cafe",
    address: "123 Main St, Cityville",
    phone: "+1 234 567 8900",
    website: "www.coffeehaven.com",
    hours: "Mon-Fri: 7am-8pm, Sat-Sun: 8am-7pm",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{shop.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">{shop.category}</p>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {shop.address}
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {shop.phone}
              </p>
              <p className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                {shop.website}
              </p>
              <p className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {shop.hours}
              </p>
            </div>
            <div className="mt-6">
              <Button>View Offers</Button>
            </div>
          </CardContent>
        </Card>
        
        <ShopRewardLevels shopName={shop.name} />
      </main>
      <Footer />
    </div>
  );
};

export default ShopProfile;
