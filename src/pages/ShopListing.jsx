import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ShopListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // محاكاة جلب البيانات من API
    const fetchedShops = [
      { id: 1, name: "كوفي هافن", category: "مقهى", rating: 4.5, distance: 0.5 },
      { id: 2, name: "تك جادجتس", category: "إلكترونيات", rating: 4.2, distance: 1.2 },
      { id: 3, name: "جنة القراء", category: "مكتبة", rating: 4.8, distance: 0.8 },
      { id: 4, name: "سوبر ماركت الرخاء", category: "بقالة", rating: 4.0, distance: 1.5 },
      { id: 5, name: "مطعم اللذائذ", category: "مطعم", rating: 4.6, distance: 0.3 },
    ];
    setShops(fetchedShops);
  }, []);

  const filteredShops = shops.filter(shop => 
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedShops = [...filteredShops].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'distance') {
      return a.distance - b.distance;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">قائمة المتاجر</h1>
        
        <div className="flex space-x-4 mb-6">
          <Input
            placeholder="ابحث عن المتاجر..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">الاسم</SelectItem>
              <SelectItem value="rating">التقييم</SelectItem>
              <SelectItem value="distance">المسافة</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedShops.map((shop) => (
            <Card key={shop.id}>
              <CardHeader>
                <CardTitle>{shop.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{shop.category}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>{shop.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-1" />
                    <span>{shop.distance} كم</span>
                  </div>
                </div>
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

export default ShopListing;
