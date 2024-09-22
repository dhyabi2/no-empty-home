import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const LastMinuteDeals = () => {
  const deals = [
    { id: 1, title: "50% Off Pizza", shop: "Pizza Palace", expiresIn: "2 hours", discount: "50%" },
    { id: 2, title: "Buy 1 Get 1 Free Coffee", shop: "Coffee Corner", expiresIn: "5 hours", discount: "BOGO" },
    { id: 3, title: "30% Off Gym Membership", shop: "FitZone", expiresIn: "12 hours", discount: "30%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Last-Minute Deals</h1>
        <p className="text-gray-600 mb-6">Hurry! These offers are about to expire.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="relative">
              <CardHeader>
                <CardTitle>{deal.title}</CardTitle>
                <Badge variant="destructive" className="absolute top-2 right-2">
                  {deal.discount}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{deal.shop}</p>
                <p className="text-sm mb-4 flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Expires in: {deal.expiresIn}
                </p>
                <Link to={`/offers/${deal.id}`}>
                  <Button className="w-full">
                    <Tag className="mr-2 h-4 w-4" />
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

export default LastMinuteDeals;
