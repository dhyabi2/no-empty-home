import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag, ShoppingCart } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const FlashSales = () => {
  const flashSales = [
    { id: 1, title: "50% Off Coffee Maker", shop: "ElectroMart", endTime: "2024-03-25T18:00:00", discount: "50%" },
    { id: 2, title: "Buy 1 Get 1 Free Books", shop: "Bookworm's Paradise", endTime: "2024-03-26T12:00:00", discount: "BOGO" },
    { id: 3, title: "70% Off Gym Membership", shop: "FitZone", endTime: "2024-03-27T23:59:59", discount: "70%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Flash Sales</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashSales.map((sale) => (
            <Card key={sale.id} className="relative">
              <CardHeader>
                <CardTitle>{sale.title}</CardTitle>
                <Badge variant="destructive" className="absolute top-2 right-2">
                  {sale.discount}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{sale.shop}</p>
                <p className="text-sm mb-4 flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Ends: {new Date(sale.endTime).toLocaleString()}
                </p>
                <Link to={`/offers/${sale.id}`}>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    View Offer
                  </Button>
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

export default FlashSales;