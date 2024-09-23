import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const PointExpirationReminder = ({ points, expirationDate }) => {
  return (
    <Card className="mb-6" dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="ml-2" />
          تذكير بانتهاء صلاحية النقاط
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">لديك <strong>{points} نقطة</strong> ستنتهي صلاحيتها في:</p>
        <p className="text-lg font-bold mb-4">{expirationDate}</p>
        <Button className="w-full">استخدم نقاطك الآن</Button>
      </CardContent>
    </Card>
  );
};

export default PointExpirationReminder;
