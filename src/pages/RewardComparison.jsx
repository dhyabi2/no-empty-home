import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart2 } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardComparison = () => {
  const rewards = [
    { id: 1, name: "Free Coffee", points: 100, value: "$5", popularity: "High" },
    { id: 2, name: "10% Off Meal", points: 200, value: "Up to $20", popularity: "Medium" },
    { id: 3, name: "Movie Ticket", points: 500, value: "$15", popularity: "High" },
    { id: 4, name: "1-Hour Massage", points: 1000, value: "$60", popularity: "Low" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Compare Rewards</h1>
        <Card>
          <CardHeader>
            <CardTitle>Reward Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reward</TableHead>
                  <TableHead>Points Required</TableHead>
                  <TableHead>Estimated Value</TableHead>
                  <TableHead>Popularity</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rewards.map((reward) => (
                  <TableRow key={reward.id}>
                    <TableCell>{reward.name}</TableCell>
                    <TableCell>{reward.points}</TableCell>
                    <TableCell>{reward.value}</TableCell>
                    <TableCell>{reward.popularity}</TableCell>
                    <TableCell>
                      <Button size="sm" onClick={() => alert(`Selected ${reward.name} for redemption`)}>
                        Select
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="mt-6 text-center">
          <Button onClick={() => alert('Generating detailed comparison chart')}>
            <BarChart2 className="mr-2 h-4 w-4" />
            Generate Detailed Comparison
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardComparison;
