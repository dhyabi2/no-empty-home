import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const ShopVisitGameElement = () => {
  return (
    <Card className="mb-6" dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MapPin className="ml-2" />
          تحدي زيارة المتجر
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">قم بزيارة 5 متاجر مختلفة هذا الأسبوع واربح 500 نقطة إضافية!</p>
        <p className="mb-4">التقدم الحالي: 2/5 متاجر</p>
        <Button>عرض المتاجر القريبة</Button>
      </CardContent>
    </Card>
  );
};

export default ShopVisitGameElement;
