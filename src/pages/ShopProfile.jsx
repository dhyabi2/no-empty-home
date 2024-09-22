import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone, Globe, Menu } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShopProfile = () => {
  const shop = {
    name: "Coffee Haven",
    rating: 4.5,
    address: "123 Main St, Cityville",
    phone: "+1 234 567 8900",
    website: "www.coffeehaven.com"
  };

  const handleLeaveReview = () => {
    alert('Review submitted successfully!');
  };

  const handleViewMenu = () => {
    alert('Viewing shop menu/products');
  };

  const handleGetDirections = () => {
    alert('Opening maps app for directions');
  };

  const handleCallShop = () => {
    alert(`Calling ${shop.phone}`);
  };

  const handleVisitWebsite = () => {
    alert(`Opening website: ${shop.website}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>{shop.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <span>{shop.rating}</span>
            </div>
            <p className="flex items-center mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              {shop.address}
            </p>
            <p className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" />
              {shop.phone}
            </p>
            <p className="flex items-center mb-4">
              <Globe className="h-4 w-4 mr-2" />
              {shop.website}
            </p>
            <div className="space-y-2">
              <Button onClick={handleLeaveReview} className="w-full">
                Leave a Review
              </Button>
              <Button onClick={handleViewMenu} className="w-full">
                <Menu className="mr-2 h-4 w-4" />
                View Menu/Products
              </Button>
              <Button onClick={handleGetDirections} className="w-full">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
              <Button onClick={handleCallShop} className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Shop
              </Button>
              <Button onClick={handleVisitWebsite} className="w-full">
                <Globe className="mr-2 h-4 w-4" />
                Visit Website
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ShopProfile;
