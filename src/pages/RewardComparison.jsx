import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, Check, X } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardComparison = () => {
  const rewards = [
    { id: 1, name: "قسيمة خصم 50 ريال", points: 500, value: 50, expiry: "30 يوم", transferable: true },
    { id: 2, name: "تذكرة سينما", points: 750, value: 75, expiry: "60 يوم", transferable: false },
    { id: 3, name: "وجبة مجانية", points: 1000, value: 100, expiry: "14 يوم", transferable: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">مقارنة المكافآت</h1>
        <Card>
          <CardHeader>
            <CardTitle>قارن بين المكافآت المتاحة</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>المكافأة</TableHead>
                  <TableHead>النقاط المطلوبة</TableHead>
                  <TableHead>القيمة (ريال)</TableHead>
                  <TableHead>مدة الصلاحية</TableHead>
                  <TableHead>قابلة للتحويل</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rewards.map((reward) => (
                  <TableRow key={reward.id}>
                    <TableCell>{reward.name}</TableCell>
                    <TableCell>{reward.points}</TableCell>
                    <TableCell>{reward.value}</TableCell>
                    <TableCell>{reward.expiry}</TableCell>
                    <TableCell>
                      {reward.transferable ? (
                        <Check className="text-green-500" />
                      ) : (
                        <X className="text-red-500" />
                      )}
                    </TableCell>
                    <TableCell>
                      <Button size="sm">استبدال</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>تقييم القيمة</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">قيمة النقطة الواحدة بالريال لكل مكافأة:</p>
            <ul className="space-y-2">
              {rewards.map((reward) => (
                <li key={reward.id} className="flex items-center">
                  <Star className="text-yellow-400 mr-2" />
                  <span>{reward.name}: {(reward.value / reward.points).toFixed(2)} ريال/نقطة</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardComparison;
