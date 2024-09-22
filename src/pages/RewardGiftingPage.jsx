import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift, Send } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardGiftingPage = () => {
  const [recipient, setRecipient] = useState('');
  const [rewardType, setRewardType] = useState('');
  const [message, setMessage] = useState('');

  const handleGiftSend = () => {
    alert('تم إرسال الهدية بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">إهداء المكافآت</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="mr-2 h-6 w-6" />
              أرسل هدية لصديق
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
                  المستلم
                </label>
                <Input
                  id="recipient"
                  placeholder="أدخل اسم المستخدم أو البريد الإلكتروني"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="rewardType" className="block text-sm font-medium text-gray-700 mb-1">
                  نوع المكافأة
                </label>
                <Select value={rewardType} onValueChange={setRewardType}>
                  <SelectTrigger id="rewardType">
                    <SelectValue placeholder="اختر نوع المكافأة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="points">نقاط</SelectItem>
                    <SelectItem value="voucher">قسيمة</SelectItem>
                    <SelectItem value="product">منتج</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  رسالة شخصية
                </label>
                <Textarea
                  id="message"
                  placeholder="أضف رسالة شخصية مع هديتك"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>
              <Button onClick={handleGiftSend} className="w-full">
                <Send className="mr-2 h-4 w-4" />
                إرسال الهدية
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardGiftingPage;
