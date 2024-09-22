import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Medal, Award } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "أحمد محمد", points: 15000, avatar: "https://i.pravatar.cc/150?img=1" },
    { rank: 2, name: "فاطمة علي", points: 14500, avatar: "https://i.pravatar.cc/150?img=2" },
    { rank: 3, name: "محمود حسن", points: 14000, avatar: "https://i.pravatar.cc/150?img=3" },
    { rank: 4, name: "زينب أحمد", points: 13500, avatar: "https://i.pravatar.cc/150?img=4" },
    { rank: 5, name: "عمر خالد", points: 13000, avatar: "https://i.pravatar.cc/150?img=5" },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-orange-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">لوحة المتصدرين</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>المتصدرون الثلاثة الأوائل</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              {leaderboardData.slice(0, 3).map((leader) => (
                <div key={leader.rank} className="text-center">
                  <div className="relative inline-block">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-20 h-20 rounded-full mb-2"
                    />
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
                      {getRankIcon(leader.rank)}
                    </div>
                  </div>
                  <h3 className="font-semibold">{leader.name}</h3>
                  <p className="text-sm text-gray-600">{leader.points} نقطة</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ترتيب المتصدرين</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">الترتيب</TableHead>
                  <TableHead>الاسم</TableHead>
                  <TableHead className="text-right">النقاط</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((leader) => (
                  <TableRow key={leader.rank}>
                    <TableCell className="font-medium">{leader.rank}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <img
                          src={leader.avatar}
                          alt={leader.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        {leader.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{leader.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button>عرض المزيد</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
