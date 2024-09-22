import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardCustomization = () => {
  const reward = {
    name: "Coffee Lover's Package",
    options: [
      { name: "Coffee Type", choices: ["Espresso", "Latte", "Cappuccino", "Americano"] },
      { name: "Size", choices: ["Small", "Medium", "Large"] },
      { name: "Extra Shot", choices: ["Yes", "No"] },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Customize Your Reward</h1>
        <Card>
          <CardHeader>
            <CardTitle>{reward.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {reward.options.map((option, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">{option.name}</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${option.name}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {option.choices.map((choice, choiceIndex) => (
                      <SelectItem key={choiceIndex} value={choice}>{choice}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
            <Button className="w-full mt-4" onClick={() => alert('Reward customized!')}>
              <Edit className="mr-2 h-4 w-4" />
              Customize Reward
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardCustomization;
