import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Share2 } from "lucide-react";

const WelcomeReward = () => {
  const handleClaim = () => {
    alert("تم المطالبة بمكافأة الترحيب!");
  };

  const handleShare = () => {
    alert("جاري مشاركة مكافأة الترحيب!");
  };

  return (
    <Card className="mb-6" dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="ml-2" />
          مكافأة الترحيب
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">احصل على مكافأة الترحيب الخاصة بك: 100 نقطة!</p>
        <div className="flex space-x-2 space-x-reverse">
          <Button onClick={handleClaim}>المطالبة بالمكافأة</Button>
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="ml-2 h-4 w-4" />
            مشاركة
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeReward;
