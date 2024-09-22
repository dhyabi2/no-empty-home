import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PointDonation = () => {
  const [selectedCharity, setSelectedCharity] = useState('');
  const [pointsToDonate, setPointsToDonate] = useState('');

  const charities = [
    { id: 1, name: "Save the Children" },
    { id: 2, name: "World Wildlife Fund" },
    { id: 3, name: "Red Cross" },
  ];

  const handleDonation = (e) => {
    e.preventDefault();
    alert(`Donating ${pointsToDonate} points to ${selectedCharity}`);
    // Reset form
    setSelectedCharity('');
    setPointsToDonate('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Donate Points</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDonation} className="space-y-4">
              <div>
                <Label htmlFor="charity">Select Charity</Label>
                <select
                  id="charity"
                  value={selectedCharity}
                  onChange={(e) => setSelectedCharity(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md"
                  required
                >
                  <option value="">Choose a charity</option>
                  {charities.map((charity) => (
                    <option key={charity.id} value={charity.name}>
                      {charity.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="pointsToDonate">Points to Donate</Label>
                <Input
                  id="pointsToDonate"
                  type="number"
                  value={pointsToDonate}
                  onChange={(e) => setPointsToDonate(e.target.value)}
                  placeholder="Enter amount of points"
                  min="1"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Donate Points <Heart className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PointDonation;
