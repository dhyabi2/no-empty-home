import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ShoppingBag, UserPlus, Gift } from "lucide-react";

const EarnPoints = () => {
  const earnOptions = [
    { icon: ShoppingBag, title: 'تسوق', description: 'اكسب نقاط على كل عملية شراء' },
    { icon: UserPlus, title: 'دعوة الأصدقاء', description: 'احصل على 100 نقطة لكل صديق تدعوه' },
    { icon: Gift, title: 'المكافآت اليومية', description: 'سجل دخولك يومياً للحصول على نقاط إضافية' },
  ];

  return (
    <Card className="w-full" dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Star className="ml-2 h-6 w-6 text-yellow-400" />
          اكسب المزيد من النقاط
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {earnOptions.map((option, index) => (
            <div key={index} className="flex items-center">
              <option.icon className="h-8 w-8 text-primary ml-4" />
              <div>
                <h3 className="font-semibold">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          ))}
          <Button className="w-full mt-4">استكشف المزيد من الطرق</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarnPoints;
