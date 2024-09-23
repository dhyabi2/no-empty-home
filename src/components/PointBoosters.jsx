import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const PointBoosters = () => {
  const boosters = [
    { id: 1, name: "مضاعفة النقاط", description: "اكسب ضعف النقاط على كل عملية شراء لمدة ساعة", duration: "1 ساعة" },
    { id: 2, name: "زيادة النقاط بنسبة 50%", description: "زيادة بنسبة 50% على النقاط المكتسبة لمدة 3 ساعات", duration: "3 ساعات" },
  ];

  return (
    <Card className="mb-6" dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="ml-2" />
          معززات النقاط
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">استخدم المعززات لزيادة نقاطك بسرعة!</p>
        {boosters.map((booster) => (
          <div key={booster.id} className="mb-4 last:mb-0">
            <h3 className="font-semibold">{booster.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{booster.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">المدة: {booster.duration}</span>
              <Button size="sm">تفعيل</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PointBoosters;
