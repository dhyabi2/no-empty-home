import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PointDonation = () => {
  const charities = [
    { id: 1, name: "Save the Oceans", description: "Help clean up our oceans and protect marine life." },
    { id: 2, name: "Education for All", description: "Provide education to underprivileged children around the world." },
    { id: 3, name: "Hunger Relief", description: "Support efforts to end hunger in local communities." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Donate Your Points</h1>
        <p className="text-gray-600 mb-6">Use your loyalty points to support charitable causes!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {charities.map((charity) => (
            <Card key={charity.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-red-500" />
                  {charity.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{charity.description}</p>
                <Input type="number" placeholder="Enter points to donate" className="mb-2" />
                <Button className="w-full">Donate Points</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PointDonation;