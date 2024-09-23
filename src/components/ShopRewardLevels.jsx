import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

const ShopRewardLevels = ({ shopName }) => {
  const rewardLevels = [
    { level: "برونزي", points: 100, perks: ["خصم 5٪ على جميع المشتريات"] },
    { level: "فضي", points: 500, perks: ["خصم 10٪ على جميع المشتريات", "قهوة مجانية مرة واحدة شهريًا"] },
    { level: "ذهبي", points: 1000, perks: ["خصم 15٪ على جميع المشتريات", "قهوة مجانية أسبوعيًا", "خدمة عملاء ذات أولوية"] },
    { level: "بلاتيني", points: 2000, perks: ["خصم 20٪ على جميع المشتريات", "قهوة مجانية يوميًا", "دعوات لفعاليات حصرية"] },
  ];

  const currentPoints = 750; // This would be fetched from user data in a real app

  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>مستويات المكافآت لـ {shopName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">نقاطك الحالية: {currentPoints}</p>
        {rewardLevels.map((level, index) => (
          <div key={level.level} className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{level.level}</h3>
              <span>{level.points} نقطة</span>
            </div>
            <Progress value={(currentPoints / level.points) * 100} className="mb-2" />
            <ul className="list-disc list-inside">
              {level.perks.map((perk, perkIndex) => (
                <li key={perkIndex}>{perk}</li>
              ))}
            </ul>
            {currentPoints >= level.points && (
              <div className="mt-2 text-green-600 flex items-center">
                <Star className="w-4 h-4 ml-1" />
                <span>تم الوصول</span>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ShopRewardLevels;
