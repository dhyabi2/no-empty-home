import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tag, Clock } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const OfferListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('expiry');

  const offers = [
    { id: 1, title: "50% Off Coffee", shop: "Coffee Haven", expires: "2024-04-30", category: "Food & Drink" },
    { id: 2, title: "Buy 1 Get 1 Free", shop: "Tech Gadgets", expires: "2024-05-15", category: "Electronics" },
    { id: 3, title: "20% Off Books", shop: "Bookworm's Paradise", expires: "2024-05-01", category: "Books" },
    { id: 4, title: "Free Gym Trial", shop: "Fitness First", expires: "2024-04-25", category: "Fitness" },
    { id: 5, title: "30% Off Groceries", shop: "Fresh Mart", expires: "2024-05-10", category: "Groceries" },
  ];

  const filteredOffers = offers.filter(offer => 
    offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.shop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (sortBy === 'expiry') {
      return new Date(a.expires) - new Date(b.expires);
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'shop') {
      return a.shop.localeCompare(b.shop);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Available Offers</h1>

        <div className="flex space-x-4 mb-6">
          <Input
            placeholder="Search offers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="expiry">Expiry Date</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="shop">Shop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedOffers.map((offer) => (
            <Card key={offer.id}>
              <CardHeader>
                <CardTitle>{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{offer.shop}</p>
                <p className="text-sm mb-2">
                  <Tag className="inline-block h-4 w-4 mr-1" />
                  {offer.category}
                </p>
                <p className="text-sm mb-4">
                  <Clock className="inline-block h-4 w-4 mr-1" />
                  Expires: {new Date(offer.expires).toLocaleDateString()}
                </p>
                <Link to={`/offers/${offer.id}`}>
                  <Button className="w-full">View Offer</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OfferListing;
