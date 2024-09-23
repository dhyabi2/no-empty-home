import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";

const RewardRedemption = ({ availablePoints }) => {
  const [selectedReward, setSelectedReward] = useState(null);

  const rewards = [
    { id: 1, name: "قسيمة خصم 10%", points: 500 },
    { id: 2, name: "قهوة مجانية", points: 200 },
    { id: 3, name: "تذكرة سينما", points: 1000 },
  ];

  const handleRedemption = () => {
    if (selectedReward) {
      alert(`تم استبدال ${selectedReward.name} مقابل ${selectedReward.points} نقطة`);
      setSelectedReward(null);
    }
  };

  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="ml-2" />
          استبدال المكافآت
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">نقاطك المتاحة: {availablePoints}</p>
        <div className="space-y-4">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedReward?.id === reward.id ? 'border-primary' : 'border-gray-200'
              }`}
              onClick={() => setSelectedReward(reward)}
            >
              <div className="flex justify-between items-center">
                <span>{reward.name}</span>
                <span>{reward.points} نقطة</span>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="w-full mt-6"
          onClick={handleRedemption}
          disabled={!selectedReward || selectedReward.points > availablePoints}
        >
          {selectedReward ? `استبدال ${selectedReward.name}` : 'اختر مكافأة'}
          <ArrowRight className="mr-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default RewardRedemption;
