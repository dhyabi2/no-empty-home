import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WishlistItem from '../components/WishlistItem';
import { Heart, Share2 } from "lucide-react";
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Free Coffee", description: "Get a free coffee at any participating cafe", points: 100 },
    { id: 2, name: "10% Discount", description: "10% off your next purchase", points: 200 },
    { id: 3, name: "Movie Ticket", description: "One free movie ticket", points: 500 },
  ]);

  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
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
          <Link to="/wishlist-sharing">
            <Button>
              <Share2 className="mr-2 h-4 w-4" />
              Share Wishlist
            </Button>
          </Link>
        </div>
        {wishlistItems.length > 0 ? (
          wishlistItems.map(item => (
            <WishlistItem key={item.id} item={item} onRemove={removeFromWishlist} />
          ))
        ) : (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-gray-600 mb-4">Your wishlist is empty</p>
              <Button>Browse Rewards</Button>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
