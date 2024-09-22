import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const favoriteShops = [
    { id: 1, name: "كوفي هافن", category: "مقهى", address: "123 شارع الرئيسي، المدينة", phone: "+1 234 567 8900" },
    { id: 2, name: "تك جادجتس", category: "إلكترونيات", address: "456 شارع الشجر، المدينة", phone: "+1 234 567 8901" },
    { id: 3, name: "جنة القراء", category: "مكتبة", address: "789 شارع البلوط، المدينة", phone: "+1 234 567 8902" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">المتاجر المفضلة</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteShops.map((shop) => (
            <Card key={shop.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{shop.name}</span>
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{shop.category}</p>
                <p className="text-sm mb-2 flex items-center">
                  <MapPin className="h-4 w-4 ml-1" />
                  {shop.address}
                </p>
                <p className="text-sm mb-4 flex items-center">
                  <Phone className="h-4 w-4 ml-1" />
                  {shop.phone}
                </p>
                <Link to={`/shops/${shop.id}`}>
                  <Button className="w-full">عرض المتجر</Button>
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

export default Favorites;
