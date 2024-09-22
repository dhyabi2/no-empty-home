import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Clock } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const FlashSales = () => {
  const flashSales = [
    { id: 1, name: "50% Off All Coffees", shop: "Coffee Haven", endsIn: "2 hours" },
    { id: 2, name: "Buy 1 Get 1 Free Pizzas", shop: "Pizza Palace", endsIn: "1 hour" },
    { id: 3, name: "70% Off Selected Books", shop: "Bookworm's Paradise", endsIn: "30 minutes" },
  ];

  const handleParticipate = (id) => {
    alert(`You've participated in the flash sale with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="h-8 w-8 text-yellow-500 mr-2" />
          Flash Sales
        </h1>
        {flashSales.map(sale => (
          <Card key={sale.id} className="mb-4">
            <CardHeader>
              <CardTitle>{sale.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{sale.shop}</p>
              <p className="text-sm text-red-500 flex items-center mb-4">
                <Clock className="h-4 w-4 mr-1" />
                Ends in: {sale.endsIn}
              </p>
              <Button onClick={() => handleParticipate(sale.id)}>
                Participate Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default FlashSales;
