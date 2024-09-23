import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const VirtualLoyaltyCard = () => {
  return (
    <Card className="mb-6" dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="ml-2" />
          بطاقة الولاء الافتراضية
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">استخدم بطاقة الولاء الافتراضية الخاصة بك لكسب وإنفاق النقاط بسهولة!</p>
        <Button className="w-full">عرض البطاقة</Button>
      </CardContent>
    </Card>
  );
};

export default VirtualLoyaltyCard;
