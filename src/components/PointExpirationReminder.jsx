import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const PointExpirationReminder = () => {
  // Dummy data for point expiration
  const expiringPoints = [
    { amount: 500, expiryDate: '2024-05-15' },
    { amount: 250, expiryDate: '2024-06-01' },
    { amount: 1000, expiryDate: '2024-06-30' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
          Points Expiring Soon
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {expiringPoints.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.amount} points expiring on {item.expiryDate}</span>
              <Button variant="outline" size="sm">Use Points</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PointExpirationReminder;