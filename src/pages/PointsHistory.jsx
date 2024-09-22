import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

const PointsHistory = () => {
  const { user } = useAuth();

  // Mock data for points history
  const pointsHistory = [
    { id: 1, date: '2024-03-15', type: 'earned', amount: 50, description: 'Purchase at Coffee Shop' },
    { id: 2, date: '2024-03-10', type: 'redeemed', amount: 100, description: 'Free Coffee Reward' },
    { id: 3, date: '2024-03-05', type: 'earned', amount: 75, description: 'Purchase at Bookstore' },
    { id: 4, date: '2024-02-28', type: 'earned', amount: 30, description: 'Referral Bonus' },
    { id: 5, date: '2024-02-20', type: 'redeemed', amount: 200, description: '10% Discount Voucher' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Points History</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Current Points Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{user?.points || 0} points</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pointsHistory.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {transaction.type === 'earned' ? (
                        <Badge variant="success" className="bg-green-100 text-green-800">
                          <ArrowUpCircle className="h-4 w-4 mr-1" />
                          Earned
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="bg-red-100 text-red-800">
                          <ArrowDownCircle className="h-4 w-4 mr-1" />
                          Redeemed
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{transaction.amount} points</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PointsHistory;