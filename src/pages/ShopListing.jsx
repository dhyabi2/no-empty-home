import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ShopListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const shops = [
    { id: 1, name: "Coffee Haven", category: "Cafe", rating: 4.5, distance: "0.5 km" },
    { id: 2, name: "Tech Gadgets", category: "Electronics", rating: 4.2, distance: "1.2 km" },
    { id: 3, name: "Fresh Grocers", category: "Supermarket", rating: 4.0, distance: "0.8 km" },
    { id: 4, name: "Bookworm's Paradise", category: "Bookstore", rating: 4.7, distance: "1.5 km" },
    { id: 5, name: "Fitness First", category: "Gym", rating: 4.3, distance: "2.0 km" },
  ];

  const filteredShops = shops.filter(shop => 
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || shop.category === categoryFilter)
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shop Listing</h1>

        <div className="flex space-x-4 mb-6">
          <Input
            placeholder="Search shops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              <SelectItem value="Cafe">Cafe</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Supermarket">Supermarket</SelectItem>
              <SelectItem value="Bookstore">Bookstore</SelectItem>
              <SelectItem value="Gym">Gym</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredShops.map((shop) => (
            <Card key={shop.id}>
              <CardHeader>
                <CardTitle>{shop.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{shop.category}</p>
                <p className="text-sm mb-2">
                  <Star className="inline-block h-4 w-4 mr-1 text-yellow-400" />
                  {shop.rating}
                </p>
                <p className="text-sm mb-4">
                  <MapPin className="inline-block h-4 w-4 mr-1" />
                  {shop.distance}
                </p>
                <div className="space-y-2">
                  <Link to={`/shops/${shop.id}`}>
                    <Button className="w-full">View Shop</Button>
                  </Link>
                  <Link to={`/shops/${shop.id}#reward-levels`}>
                    <Button variant="outline" className="w-full">View Reward Levels</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShopListing;
