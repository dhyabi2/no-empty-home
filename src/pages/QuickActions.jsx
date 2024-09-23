import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Coffee, Book, Dumbbell, Utensils, Plane, ShoppingBag, Tv, Car, Music } from "lucide-react";
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

const QuickActions = () => {
  const categories = [
    { id: 1, name: "مأكولات ومشروبات", icon: Coffee, color: "bg-red-500" },
    { id: 2, name: "كتب ووسائط", icon: Book, color: "bg-blue-500" },
    { id: 3, name: "رياضة ولياقة", icon: Dumbbell, color: "bg-green-500" },
    { id: 4, name: "مطاعم", icon: Utensils, color: "bg-yellow-500" },
    { id: 5, name: "سفر", icon: Plane, color: "bg-purple-500" },
    { id: 6, name: "تسوق", icon: ShoppingBag, color: "bg-pink-500" },
    { id: 7, name: "ترفيه", icon: Tv, color: "bg-indigo-500" },
    { id: 8, name: "سيارات", icon: Car, color: "bg-gray-500" },
    { id: 9, name: "موسيقى", icon: Music, color: "bg-orange-500" },
    { id: 10, name: "متنوعة", icon: Gift, color: "bg-teal-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">الإجراءات السريعة</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/rewards/${category.id}`}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className={`${category.color} text-white`}>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-sm">{category.name}</span>
                    <category.icon className="h-6 w-6" />
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default QuickActions;