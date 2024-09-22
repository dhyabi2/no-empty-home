import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Coffee, Book, Dumbbell, Utensils, Plane, ShoppingBag, Tv, Car, Music } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const RewardCategories = () => {
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
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">فئات المكافآت</h1>
        <p className="text-gray-600 mb-6">اكتشف مجموعة متنوعة من المكافآت المصنفة حسب اهتماماتك</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className={`${category.color} text-white`}>
                <CardTitle className="flex items-center justify-between">
                  <span>{category.name}</span>
                  <category.icon className="h-6 w-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Link to={`/rewards/${category.id}`}>
                  <Button className="w-full">
                    عرض المكافآت
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="h-6 w-6 ml-2" />
              استكشف جميع الفئات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              تصفح مجموعتنا الواسعة من فئات المكافآت لتجد ما يناسب اهتماماتك وأسلوب حياتك. من تجارب الطعام الفاخرة إلى المغامرات المثيرة، لدينا شيء للجميع.
            </p>
            <Button variant="outline" className="w-full">
              عرض جميع المكافآت
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardCategories;
