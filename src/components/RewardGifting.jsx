import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift } from "lucide-react";

const RewardGifting = () => {
  const [selectedReward, setSelectedReward] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');

  const dummyRewards = [
    { id: 1, name: "قهوة مجانية", points: 100 },
    { id: 2, name: "خصم 10%", points: 200 },
    { id: 3, name: "تذكرة سينما", points: 500 },
  ];

  const handleGift = () => {
    console.log(`إهداء ${selectedReward} إلى ${recipientEmail}`);
    // في التطبيق الحقيقي، هنا سيتم إرسال الهدية إلى المستلم
    alert('تم إرسال الهدية بنجاح!');
  };

  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="ml-2" />
          إهداء مكافأة
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <Label htmlFor="reward">اختر مكافأة</Label>
            <Select value={selectedReward} onValueChange={setSelectedReward}>
              <SelectTrigger id="reward">
                <SelectValue placeholder="اختر مكافأة" />
              </SelectTrigger>
              <SelectContent>
                {dummyRewards.map((reward) => (
                  <SelectItem key={reward.id} value={reward.name}>
                    {reward.name} ({reward.points} نقطة)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="email">البريد الإلكتروني للمستلم</Label>
            <Input
              id="email"
              type="email"
              placeholder="أدخل البريد الإلكتروني للمستلم"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </div>
          <Button onClick={handleGift} disabled={!selectedReward || !recipientEmail}>
            إرسال الهدية
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RewardGifting;
