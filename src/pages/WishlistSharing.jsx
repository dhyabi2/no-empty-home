import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Heart } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const WishlistSharing = () => {
  const wishlistItems = [
    { id: 1, name: "Free Coffee", description: "Get a free coffee at any participating cafe", points: 100 },
    { id: 2, name: "10% Discount", description: "10% off your next purchase", points: 200 },
    { id: 3, name: "Movie Ticket", description: "One free movie ticket", points: 500 },
  ];

  const handleShare = () => {
    // In a real app, this would open a sharing dialog
    alert('Sharing functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <Heart className="h-8 w-8 text-red-500 mr-2" />
          Share Your Wishlist
        </h1>
        <Button onClick={handleShare} className="mb-6">
          <Share2 className="mr-2 h-4 w-4" />
          Share Entire Wishlist
        </Button>
        {wishlistItems.map(item => (
          <Card key={item.id} className="mb-4">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="font-semibold mb-4">{item.points} points</p>
              <Button onClick={() => handleShare(item.id)} variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share This Item
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default WishlistSharing;