import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ShoppingBag } from "lucide-react";
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';

const NearbyShops = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nearbyShops, setNearbyShops] = useState([]);
  const [showShops, setShowShops] = useState(false);

  const fetchNearbyShops = () => {
    setIsLoading(true);
    setShowShops(true);
    // Simulating an API call
    setTimeout(() => {
      const mockShops = [
        { id: 1, name: "كوفي هافن", category: "مقهى", distance: 0.5 },
        { id: 2, name: "تك جادجتس", category: "إلكترونيات", distance: 1.2 },
        { id: 3, name: "جنة القراء", category: "مكتبة", distance: 0.8 },
      ];
      setNearbyShops(mockShops);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">المتاجر القريبة</h2>
      <Button onClick={fetchNearbyShops} className="mb-4">
        عرض المتاجر القريبة
      </Button>
      {showShops && (
        isLoading ? (
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
        ) : nearbyShops.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyShops.map((shop) => (
              <Card key={shop.id}>
                <CardHeader>
                  <CardTitle>{shop.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{shop.category}</p>
                  <p className="text-sm mb-4">
                    <MapPin className="inline-block h-4 w-4 ml-1" />
                    {shop.distance} كم
                  </p>
                  <Link to={`/shops/${shop.id}`}>
                    <Button className="w-full">
                      <ShoppingBag className="ml-2 h-4 w-4" />
                      عرض المتجر
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p>لم يتم العثور على متاجر قريبة.</p>
        )
      )}
    </section>
  );
};

export default NearbyShops;
