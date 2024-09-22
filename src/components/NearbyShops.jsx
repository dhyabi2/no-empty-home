import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ShoppingBag } from "lucide-react";
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';

const NearbyShops = ({ isLoading, nearbyShops }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Nearby Shops</h2>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/3 mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : nearbyShops && nearbyShops.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyShops.map((shop) => (
            <Card key={shop.id}>
              <CardHeader>
                <CardTitle>{shop.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{shop.category}</p>
                <p className="text-sm mb-4">
                  <MapPin className="inline-block h-4 w-4 mr-1" />
                  {shop.distance} km away
                </p>
                <Link to={`/shops/${shop.id}`}>
                  <Button className="w-full">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    View Shop
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p>No nearby shops found.</p>
      )}
    </section>
  );
};

export default NearbyShops;
