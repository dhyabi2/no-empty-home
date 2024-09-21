import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag, Clock, MapPin } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const OfferDetail = () => {
  const { id } = useParams();

  // Mock data for the offer (in a real app, this would be fetched from an API)
  const offer = {
    id: id,
    title: "50% Off Coffee",
    shop: "Coffee Haven",
    description: "Enjoy half-price coffee on all varieties. Perfect for your morning boost or afternoon pick-me-up!",
    expires: "2024-05-31",
    terms: "Valid for one-time use. Cannot be combined with other offers.",
    shopAddress: "123 Main St, Cityville",
    category: "Food & Drink"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{offer.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-2">{offer.shop}</p>
            <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
            <div className="flex items-center mb-2">
              <Tag className="h-5 w-5 mr-2" />
              <span>{offer.category}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="h-5 w-5 mr-2" />
              <span>Expires: {new Date(offer.expires).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{offer.shopAddress}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Terms and Conditions:</strong> {offer.terms}
            </p>
            <Button className="w-full">Redeem Offer</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Redeem</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Show this offer to the cashier at {offer.shop}</li>
              <li>The cashier will apply the discount to your purchase</li>
              <li>Enjoy your discounted item!</li>
            </ol>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default OfferDetail;