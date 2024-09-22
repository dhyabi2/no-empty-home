import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Leaderboard = () => {
  // Dummy data for top point earners
  const topEarners = [
    { id: 1, name: "John Doe", points: 5000, avatar: "/avatar1.png" },
    { id: 2, name: "Jane Smith", points: 4800, avatar: "/avatar2.png" },
    { id: 3, name: "Bob Johnson", points: 4600, avatar: "/avatar3.png" },
    { id: 4, name: "Alice Brown", points: 4400, avatar: "/avatar4.png" },
    { id: 5, name: "Charlie Davis", points: 4200, avatar: "/avatar5.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Leaderboard</h1>
        <Card>
          <CardHeader>
            <CardTitle>Top Point Earners</CardTitle>
          </CardHeader>
          <CardContent>
            {topEarners.map((user, index) => (
              <div key={user.id} className="flex items-center mb-4 last:mb-0">
                <Badge variant={index < 3 ? "default" : "secondary"} className="mr-4 w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </Badge>
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.points} points</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;