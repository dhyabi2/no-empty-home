import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search as SearchIcon, MapPin, Tag } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({ shops: [], offers: [] });

  const handleSearch = () => {
    // Simulated search results
    const mockShops = [
      { id: 1, name: "Coffee Haven", address: "123 Main St, City", description: "Best coffee in town" },
      { id: 2, name: "Tech Gadgets", address: "456 Elm St, City", description: "Latest electronics and gadgets" },
      { id: 3, name: "Fresh Grocers", address: "789 Oak St, City", description: "Fresh produce and groceries" }
    ];

    const mockOffers = [
      { id: 1, title: "50% Off Coffee", shop: "Coffee Haven", expiry: "31 Mar 2024" },
      { id: 2, title: "Buy 1 Get 1 Free", shop: "Tech Gadgets", expiry: "15 Apr 2024" },
      { id: 3, title: "20% Off Groceries", shop: "Fresh Grocers", expiry: "30 Apr 2024" }
    ];

    // Filter results based on search term
    const filteredShops = mockShops.filter(shop => 
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredOffers = mockOffers.filter(offer => 
      offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.shop.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults({ shops: filteredShops, offers: filteredOffers });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <Input
            type="text"
            placeholder="Search shops or offers..."
            className="flex-grow mr-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch}>
            <SearchIcon className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <Tabs defaultValue="shops">
          <TabsList className="mb-4">
            <TabsTrigger value="shops">Shops</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
          </TabsList>
          <TabsContent value="shops">
            <div className="space-y-4">
              {searchResults.shops.map((shop) => (
                <Card key={shop.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{shop.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      <MapPin className="inline-block h-4 w-4 mr-1" />
                      {shop.address}
                    </p>
                    <p className="text-sm mb-2">{shop.description}</p>
                    <Link to={`/shops/${shop.id}`}>
                      <Button variant="outline" size="sm">View Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="offers">
            <div className="space-y-4">
              {searchResults.offers.map((offer) => (
                <Card key={offer.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{offer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      <Tag className="inline-block h-4 w-4 mr-1" />
                      {offer.shop}
                    </p>
                    <p className="text-sm mb-2">
                      Valid until: {offer.expiry}
                    </p>
                    <Link to={`/offers/${offer.id}`}>
                      <Button variant="outline" size="sm">View Offer</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
