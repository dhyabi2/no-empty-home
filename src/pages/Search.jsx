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
              {[1, 2, 3].map((shop) => (
                <Card key={shop}>
                  <CardHeader>
                    <CardTitle className="text-lg">Shop {shop}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      <MapPin className="inline-block h-4 w-4 mr-1" />
                      123 Main St, City, Country
                    </p>
                    <p className="text-sm mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="offers">
            <div className="space-y-4">
              {[1, 2, 3].map((offer) => (
                <Card key={offer}>
                  <CardHeader>
                    <CardTitle className="text-lg">Offer {offer}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      <Tag className="inline-block h-4 w-4 mr-1" />
                      50% off on selected items
                    </p>
                    <p className="text-sm mb-2">
                      Valid until: 31 Dec 2023
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