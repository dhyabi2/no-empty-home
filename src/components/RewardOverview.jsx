import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const RewardOverview = ({ isLoading, user, handleEarnReward }) => {
  if (isLoading) {
    return (
      <Card className="mb-8" dir="rtl">
        <CardHeader>
          <CardTitle>جاري التحميل...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  const pointsToNextReward = 1000 - (user?.points % 1000);
  const progress = ((user?.points % 1000) / 1000) * 100;

  return (
    <Card className="mb-8" dir="rtl">
      <CardHeader>
        <CardTitle>نظرة عامة على المكافآت</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold mb-2">{user?.points || 0} نقطة</p>
        <p className="text-sm text-gray-500 mb-4">{pointsToNextReward} نقطة للمكافأة التالية</p>
        <Progress value={progress} className="mb-4" />
        <Button onClick={handleEarnReward}>اكسب نقاط</Button>
      </CardContent>
    </Card>
  );
};

export default RewardOverview;
