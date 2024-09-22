import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardComparison = () => {
  const rewards = [
    { name: "Free Coffee", points: 100, value: "$5", expiryDays: 30 },
    { name: "10% Off Coupon", points: 200, value: "Up to $20", expiryDays: 60 },
    { name: "Movie Ticket", points: 500, value: "$15", expiryDays: 90 },
    { name: "Gift Card", points: 1000, value: "$50", expiryDays: 180 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Comparison</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reward</TableHead>
              <TableHead>Points Required</TableHead>
              <TableHead>Estimated Value</TableHead>
              <TableHead>Expiry</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rewards.map((reward) => (
              <TableRow key={reward.name}>
                <TableCell>{reward.name}</TableCell>
                <TableCell>{reward.points}</TableCell>
                <TableCell>{reward.value}</TableCell>
                <TableCell>{reward.expiryDays} days</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
      <Footer />
    </div>
  );
};

export default RewardComparison;
