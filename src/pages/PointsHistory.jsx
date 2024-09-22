import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, ArrowDownLeft, Filter } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PointsHistory = () => {
  const transactions = [
    { id: 1, date: "2024-03-15", description: "شراء في متجر الإلكترونيات", points: 500, type: "earn" },
    { id: 2, date: "2024-03-10", description: "استبدال مكافأة", points: 1000, type: "redeem" },
    { id: 3, date: "2024-03-05", description: "إحالة صديق", points: 250, type: "earn" },
    { id: 4, date: "2024-02-28", description: "شراء في السوبر ماركت", points: 150, type: "earn" },
    { id: 5, date: "2024-02-20", description: "استبدال قسيمة خصم", points: 500, type: "redeem" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">سجل النقاط</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>ملخص النقاط</span>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 ml-2" />
                تصفية
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-500">الرصيد الحالي</p>
                <p className="text-2xl font-bold">5,250</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">النقاط المكتسبة</p>
                <p className="text-2xl font-bold text-green-600">+900</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">النقاط المستبدلة</p>
                <p className="text-2xl font-bold text-red-600">-1,500</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>سجل المعاملات</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>التاريخ</TableHead>
                  <TableHead>الوصف</TableHead>
                  <TableHead>النقاط</TableHead>
                  <TableHead>النوع</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell className={transaction.type === 'earn' ? 'text-green-600' : 'text-red-600'}>
                      {transaction.type === 'earn' ? '+' : '-'}{transaction.points}
                    </TableCell>
                    <TableCell>
                      {transaction.type === 'earn' ? (
                        <span className="flex items-center text-green-600">
                          <ArrowUpRight className="h-4 w-4 ml-1" />
                          اكتساب
                        </span>
                      ) : (
                        <span className="flex items-center text-red-600">
                          <ArrowDownLeft className="h-4 w-4 ml-1" />
                          استبدال
                        </span>
                      )}
                    </TableCell>
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
