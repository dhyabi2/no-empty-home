import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const RewardConcierge = () => {
  return (
    <Card className="mb-6" dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="ml-2" />
          مساعد المكافآت
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">دعنا نساعدك في العثور على المكافأة المثالية لك!</p>
        <Button className="w-full">ابدأ الاستشارة</Button>
      </CardContent>
    </Card>
  );
};

export default RewardConcierge;
