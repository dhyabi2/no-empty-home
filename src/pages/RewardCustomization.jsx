import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift, Palette, Edit } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const RewardCustomization = () => {
  const [selectedReward, setSelectedReward] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const dummyRewards = [
    { id: 1, name: "Free Coffee", points: 100 },
    { id: 2, name: "10% Discount", points: 200 },
    { id: 3, name: "Movie Ticket", points: 500 },
  ];

  const colorOptions = ['Red', 'Blue', 'Green', 'Purple', 'Gold'];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Customize Your Reward</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="mr-2" />
              Personalize Your Gift
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="reward">Select a Reward</Label>
              <Select value={selectedReward} onValueChange={setSelectedReward}>
                <SelectTrigger id="reward">
                  <SelectValue placeholder="Choose a reward" />
                </SelectTrigger>
                <SelectContent>
                  {dummyRewards.map((reward) => (
                    <SelectItem key={reward.id} value={reward.name}>
                      {reward.name} ({reward.points} points)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Custom Message</Label>
              <Input
                id="message"
                placeholder="Enter your personalized message"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="color">Choose Color</Label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger id="color">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  {colorOptions.map((color) => (
                    <SelectItem key={color} value={color.toLowerCase()}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="pt-4">
              <Button className="w-full">
                <Edit className="mr-2 h-4 w-4" />
                Customize Reward
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Link to="/redeem-points">
            <Button variant="outline" className="w-full">
              Back to Rewards
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardCustomization;