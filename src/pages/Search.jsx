import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search as SearchIcon, MapPin, Tag } from "lucide-react";

const Search = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Search shops or offers..."
              className="flex-grow mr-2"
            />
            <Button>
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="shops">
          <TabsList className="mb-4">
            <TabsTrigger value="shops">Shops</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
          </TabsList>
          <TabsContent value="shops">
            <div className="space-y-4">
              {[
                { name: "Coffee Haven", address: "123 Main St, City", description: "Best coffee in town" },
                { name: "Tech Gadgets", address: "456 Elm St, City", description: "Latest electronics and gadgets" },
                { name: "Fresh Grocers", address: "789 Oak St, City", description: "Fresh produce and groceries" }
              ].map((shop, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{shop.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      <MapPin className="inline-block h-4 w-4 mr-1" />
                      {shop.address}
                    </p>
                    <p className="text-sm mb-2">{shop.description}</p>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="offers">
            <div className="space-y-4">
              {[
                { title: "50% Off Coffee", shop: "Coffee Haven", expiry: "31 Mar 2024" },
                { title: "Buy 1 Get 1 Free", shop: "Tech Gadgets", expiry: "15 Apr 2024" },
                { title: "20% Off Groceries", shop: "Fresh Grocers", expiry: "30 Apr 2024" }
              ].map((offer, index) => (
                <Card key={index}>
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
                    <Button variant="outline" size="sm">View Offer</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Search;
