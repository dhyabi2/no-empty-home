import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const RewardPlanner = () => {
  const [targetPoints, setTargetPoints] = useState('');
  const [currentPoints, setCurrentPoints] = useState('');
  const [dailyEarning, setDailyEarning] = useState('');
  const [daysToGoal, setDaysToGoal] = useState(null);

  const calculateDaysToGoal = () => {
    const target = parseInt(targetPoints);
    const current = parseInt(currentPoints);
    const daily = parseInt(dailyEarning);

    if (target && current !== undefined && daily) {
      const days = Math.ceil((target - current) / daily);
      setDaysToGoal(days);
    }
  };

  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="ml-2" />
          مخطط المكافآت
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="targetPoints" className="block text-sm font-medium text-gray-700 mb-1">
              الهدف (بالنقاط)
            </label>
            <Input
              id="targetPoints"
              type="number"
              value={targetPoints}
              onChange={(e) => setTargetPoints(e.target.value)}
              placeholder="أدخل هدف النقاط"
            />
          </div>
          <div>
            <label htmlFor="currentPoints" className="block text-sm font-medium text-gray-700 mb-1">
              النقاط الحالية
            </label>
            <Input
              id="currentPoints"
              type="number"
              value={currentPoints}
              onChange={(e) => setCurrentPoints(e.target.value)}
              placeholder="أدخل نقاطك الحالية"
            />
          </div>
          <div>
            <label htmlFor="dailyEarning" className="block text-sm font-medium text-gray-700 mb-1">
              متوسط الكسب اليومي
            </label>
            <Input
              id="dailyEarning"
              type="number"
              value={dailyEarning}
              onChange={(e) => setDailyEarning(e.target.value)}
              placeholder="أدخل متوسط الكسب اليومي"
            />
          </div>
          <Button onClick={calculateDaysToGoal} className="w-full">
            حساب
          </Button>
          {daysToGoal !== null && (
            <p className="text-center font-semibold mt-4">
              ستصل إلى هدفك في حوالي {daysToGoal} يوم
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardPlanner;
