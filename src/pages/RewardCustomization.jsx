import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Gift } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardCustomization = () => {
  const [rewardType, setRewardType] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleCustomize = () => {
    alert('تم تخصيص المكافأة بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">تخصيص المكافأة</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Edit className="mr-2 h-6 w-6" />
              خصص مكافأتك
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="rewardType" className="block text-sm font-medium text-gray-700 mb-1">
                  نوع المكافأة
                </label>
                <Select value={rewardType} onValueChange={setRewardType}>
                  <SelectTrigger id="rewardType">
                    <SelectValue placeholder="اختر نوع المكافأة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="giftCard">بطاقة هدايا</SelectItem>
                    <SelectItem value="experience">تجربة فريدة</SelectItem>
                    <SelectItem value="product">منتج مخصص</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  القيمة / الكمية
                </label>
                <Input id="amount" type="number" placeholder="أدخل القيمة أو الكمية" />
              </div>
              <div>
                <label htmlFor="customMessage" className="block text-sm font-medium text-gray-700 mb-1">
                  رسالة مخصصة
                </label>
                <Textarea
                  id="customMessage"
                  placeholder="أضف رسالة شخصية لمكافأتك"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  rows={4}
                />
              </div>
              <Button onClick={handleCustomize} className="w-full">
                <Gift className="mr-2 h-4 w-4" />
                تخصيص المكافأة
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardCustomization;
