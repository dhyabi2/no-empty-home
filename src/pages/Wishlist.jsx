import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Heart } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WishlistItem from '../components/WishlistItem';

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: "Free Coffee", description: "Get a free coffee at any participating cafe", points: 100 },
    { id: 2, name: "10% Discount", description: "10% off your next purchase", points: 200 },
    { id: 3, name: "Movie Ticket", description: "One free movie ticket", points: 500 },
  ];

  const handleShare = () => {
    alert('Wishlist shared successfully!');
  };

  const handleRemove = (id) => {
    alert(`Item ${id} removed from wishlist`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Heart className="h-8 w-8 text-red-500 mr-2" />
            My Wishlist
          </h1>
          <Button onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share Wishlist
          </Button>
        </div>
        {wishlistItems.map(item => (
          <WishlistItem key={item.id} item={item} onRemove={handleRemove} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
