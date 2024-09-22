import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Coffee, Book, Dumbbell, Utensils, Plane } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const RewardCategories = () => {
  const categories = [
    { id: 1, name: "Food & Drink", icon: Coffee, color: "bg-red-500" },
    { id: 2, name: "Books & Media", icon: Book, color: "bg-blue-500" },
    { id: 3, name: "Fitness", icon: Dumbbell, color: "bg-green-500" },
    { id: 4, name: "Restaurants", icon: Utensils, color: "bg-yellow-500" },
    { id: 5, name: "Travel", icon: Plane, color: "bg-purple-500" },
    { id: 6, name: "Miscellaneous", icon: Gift, color: "bg-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardHeader className={`${category.color} text-white`}>
                <CardTitle className="flex items-center">
                  <category.icon className="h-6 w-6 mr-2" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Link to={`/rewards/${category.id}`}>
                  <Button className="w-full">View Rewards</Button>
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

export default RewardCategories;