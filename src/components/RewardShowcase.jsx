import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Star } from "lucide-react";

const RewardShowcase = ({ rewards }) => {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="ml-2" />
          عرض المكافآت
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward) => (
            <Card key={reward.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{reward.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{reward.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">{reward.points} نقطة</span>
                  <Button size="sm">استبدال</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardShowcase;
