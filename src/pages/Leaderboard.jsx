import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Star, Users } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Leaderboard = () => {
  const [leaderboardType, setLeaderboardType] = useState('points');

  const leaderboardData = {
    points: [
      { rank: 1, name: "أحمد محمد", points: 15000, shopVisits: 50 },
      { rank: 2, name: "فاطمة علي", points: 14500, shopVisits: 48 },
      { rank: 3, name: "محمد خالد", points: 14000, shopVisits: 45 },
      { rank: 4, name: "نورة سعيد", points: 13500, shopVisits: 43 },
      { rank: 5, name: "عبدالله عمر", points: 13000, shopVisits: 40 },
    ],
    shopVisits: [
      { rank: 1, name: "سارة أحمد", shopVisits: 60, points: 12000 },
      { rank: 2, name: "خالد محمود", shopVisits: 55, points: 11500 },
      { rank: 3, name: "ليلى حسن", shopVisits: 52, points: 11000 },
      { rank: 4, name: "عمر فاروق", shopVisits: 50, points: 10500 },
      { rank: 5, name: "هدى سمير", shopVisits: 48, points: 10000 },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">لوحة المتصدرين</h1>
        
        <Tabs defaultValue="points" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="points" onClick={() => setLeaderboardType('points')}>النقاط</TabsTrigger>
            <TabsTrigger value="shopVisits" onClick={() => setLeaderboardType('shopVisits')}>زيارات المتاجر</TabsTrigger>
          </TabsList>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              {leaderboardType === 'points' ? (
                <Star className="h-6 w-6 ml-2 text-yellow-400" />
              ) : (
                <Users className="h-6 w-6 ml-2 text-blue-500" />
              )}
              {leaderboardType === 'points' ? 'المتصدرون في النقاط' : 'المتصدرون في زيارات المتاجر'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">الترتيب</TableHead>
                  <TableHead>الاسم</TableHead>
                  <TableHead className="text-right">{leaderboardType === 'points' ? 'النقاط' : 'الزيارات'}</TableHead>
                  <TableHead className="text-right">{leaderboardType === 'points' ? 'الزيارات' : 'النقاط'}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData[leaderboardType].map((user) => (
                  <TableRow key={user.rank}>
                    <TableCell className="font-medium">
                      {user.rank === 1 && <Trophy className="h-5 w-5 text-yellow-400 inline ml-1" />}
                      {user.rank}
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell className="text-right">{leaderboardType === 'points' ? user.points : user.shopVisits}</TableCell>
                    <TableCell className="text-right">{leaderboardType === 'points' ? user.shopVisits : user.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Button className="mt-6 w-full">عرض المزيد</Button>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
