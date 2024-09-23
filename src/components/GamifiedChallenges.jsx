import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

const GamifiedChallenges = () => {
  const challenges = [
    { id: 1, name: "زيارة 5 متاجر مختلفة", progress: 3, total: 5, reward: "200 نقطة" },
    { id: 2, name: "إنفاق 500 ريال في أسبوع واحد", progress: 300, total: 500, reward: "500 نقطة" },
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="ml-2" />
          التحديات المحفزة
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">أكمل التحديات واربح مكافآت إضافية!</p>
        {challenges.map((challenge) => (
          <div key={challenge.id} className="mb-4 last:mb-0">
            <h3 className="font-semibold">{challenge.name}</h3>
            <p className="text-sm text-gray-600 mb-2">التقدم: {challenge.progress}/{challenge.total}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">المكافأة: {challenge.reward}</span>
              <Button size="sm">عرض التفاصيل</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default GamifiedChallenges;
