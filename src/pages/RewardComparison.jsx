import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardComparison = () => {
  const [selectedRewards, setSelectedRewards] = useState([]);
  const [availableRewards] = useState([
    { id: 1, name: "Free Coffee", points: 100, value: "$5", expiryDays: 30 },
    { id: 2, name: "10% Discount", points: 200, value: "Up to $20", expiryDays: 60 },
    { id: 3, name: "Movie Ticket", points: 500, value: "$15", expiryDays: 90 },
    { id: 4, name: "Gift Card", points: 1000, value: "$50", expiryDays: 180 },
  ]);

  const handleRewardSelect = (rewardId) => {
    const reward = availableRewards.find(r => r.id === parseInt(rewardId));
    if (reward && selectedRewards.length < 3) {
      setSelectedRewards([...selectedRewards, reward]);
    }
  };

  const handleRemoveReward = (rewardId) => {
    setSelectedRewards(selectedRewards.filter(r => r.id !== rewardId));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Comparison</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Rewards to Compare</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={handleRewardSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a reward" />
              </SelectTrigger>
              <SelectContent>
                {availableRewards.map(reward => (
                  <SelectItem key={reward.id} value={reward.id.toString()}>
                    {reward.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        {selectedRewards.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reward</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Expiry</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedRewards.map(reward => (
                    <TableRow key={reward.id}>
                      <TableCell>{reward.name}</TableCell>
                      <TableCell>{reward.points}</TableCell>
                      <TableCell>{reward.value}</TableCell>
                      <TableCell>{reward.expiryDays} days</TableCell>
                      <TableCell>
                        <Button variant="ghost" onClick={() => handleRemoveReward(reward.id)}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RewardComparison;