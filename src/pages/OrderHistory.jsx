import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShoppingBag, Calendar, DollarSign } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderHistory = () => {
  const orders = [
    { id: 1, date: "2024-05-15", total: 150.00, status: "مكتمل", items: 3 },
    { id: 2, date: "2024-05-10", total: 75.50, status: "قيد الشحن", items: 2 },
    { id: 3, date: "2024-05-05", total: 200.00, status: "مكتمل", items: 4 },
    { id: 4, date: "2024-04-28", total: 50.00, status: "ملغي", items: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">سجل الطلبات</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingBag className="ml-2 h-6 w-6" />
              ملخص الطلبات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-primary ml-2" />
                <div>
                  <p className="text-sm text-gray-500">إجمالي الطلبات</p>
                  <p className="text-xl font-bold">{orders.length}</p>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-500 ml-2" />
                <div>
                  <p className="text-sm text-gray-500">إجمالي الإنفاق</p>
                  <p className="text-xl font-bold">{orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)} ريال</p>
                </div>
              </div>
              <div className="flex items-center">
                <ShoppingBag className="h-8 w-8 text-blue-500 ml-2" />
                <div>
                  <p className="text-sm text-gray-500">إجمالي المنتجات</p>
                  <p className="text-xl font-bold">{orders.reduce((sum, order) => sum + order.items, 0)}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم الطلب</TableHead>
              <TableHead>التاريخ</TableHead>
              <TableHead>المجموع</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>عدد المنتجات</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>#{order.id}</TableCell>
                <TableCell>{new Date(order.date).toLocaleDateString('ar-SA')}</TableCell>
                <TableCell>{order.total.toFixed(2)} ريال</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">عرض التفاصيل</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistory;
