import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MapPin, Tag } from "lucide-react";

const Favorites = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Favorites</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Coffee Shop XYZ</span>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">
                <MapPin className="inline-block h-4 w-4 mr-1" />
                123 Main St, City, Country
              </p>
              <p className="text-sm mb-2">
                Your favorite coffee shop with amazing lattes.
              </p>
              <Button variant="outline" size="sm">View Details</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>50% Off at Restaurant ABC</span>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">
                <Tag className="inline-block h-4 w-4 mr-1" />
                50% off on all main courses
              </p>
              <p className="text-sm mb-2">
                Valid until: 31 Dec 2023
              </p>
              <Button variant="outline" size="sm">View Offer</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Bookstore DEF</span>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">
                <MapPin className="inline-block h-4 w-4 mr-1" />
                456 Book Lane, City, Country
              </p>
              <p className="text-sm mb-2">
                Your go-to place for the latest bestsellers.
              </p>
              <Button variant="outline" size="sm">View Details</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Favorites;
