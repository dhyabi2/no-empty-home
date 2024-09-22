import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift, Search, Filter } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RedeemPoints = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const rewards = [
    { id: 1, name: "قسيمة خصم 50 ريال", points: 500, category: "تسوق" },
    { id: 2, name: "تذكرة سينما", points: 750, category: "ترفيه" },
    { id: 3, name: "وجبة مجانية", points: 1000, category: "مطاعم" },
    { id: 4, name: "خصم 20% على الإقامة", points: 2000, category: "سفر" },
    { id: 5, name: "جهاز لوحي", points: 5000, category: "إلكترونيات" },
    { id: 6, name: "عضوية نادي رياضي لمدة شهر", points: 3000, category: "رياضة" },
  ];

  const filteredRewards = rewards.filter(reward => 
    reward.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || reward.category === category)
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">استبدال النقاط</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>رصيد النقاط الحالي</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">5,250</p>
            <p className="text-sm text-gray-500">نقطة متاحة للاستبدال</p>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <Input
              placeholder="ابحث عن المكافآت..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              icon={<Search className="h-5 w-5 text-gray-500" />}
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="تصفية حسب الفئة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">جميع الفئات</SelectItem>
              <SelectItem value="تسوق">تسوق</SelectItem>
              <SelectItem value="ترفيه">ترفيه</SelectItem>
              <SelectItem value="مطاعم">مطاعم</SelectItem>
              <SelectItem value="سفر">سفر</SelectItem>
              <SelectItem value="إلكترونيات">إلكترونيات</SelectItem>
              <SelectItem value="رياضة">رياضة</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <CardTitle>{reward.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">{reward.points} نقطة</p>
                <p className="text-sm text-gray-500 mb-4">{reward.category}</p>
                <Button className="w-full">
                  <Gift className="h-5 w-5 ml-2" />
                  استبدال
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRewards.length === 0 && (
          <p className="text-center text-gray-500 mt-6">لا توجد مكافآت متطابقة مع معايير البحث.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RedeemPoints;
