import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Target, TrendingUp } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardPlanner = () => {
  const [targetReward, setTargetReward] = useState('');
  const [currentPoints, setCurrentPoints] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const handlePlanSubmit = (e) => {
    e.preventDefault();
    alert('تم إنشاء خطة المكافآت بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">مخطط المكافآت</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-6 w-6" />
              حدد هدفك
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePlanSubmit} className="space-y-4">
              <div>
                <label htmlFor="targetReward" className="block text-sm font-medium text-gray-700 mb-1">
                  المكافأة المستهدفة
                </label>
                <Select value={targetReward} onValueChange={setTargetReward}>
                  <SelectTrigger id="targetReward">
                    <SelectValue placeholder="اختر المكافأة المستهدفة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="giftCard">بطاقة هدايا 500 ريال</SelectItem>
                    <SelectItem value="smartphone">هاتف ذكي جديد</SelectItem>
                    <SelectItem value="vacation">رحلة لشخصين</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="currentPoints" className="block text-sm font-medium text-gray-700 mb-1">
                  نقاطك الحالية
                </label>
                <Input
                  id="currentPoints"
                  type="number"
                  placeholder="أدخل عدد نقاطك الحالية"
                  value={currentPoints}
                  onChange={(e) => setCurrentPoints(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="targetDate" className="block text-sm font-medium text-gray-700 mb-1">
                  التاريخ المستهدف
                </label>
                <Input
                  id="targetDate"
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                إنشاء الخطة
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-6 w-6" />
              تقدمك
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-2">هدفك: {targetReward || 'لم يتم التحديد بعد'}</p>
            <p className="mb-4">النقاط المطلوبة: 5000</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-sm text-gray-600">أنت على بعد 2750 نقطة من هدفك!</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardPlanner;
