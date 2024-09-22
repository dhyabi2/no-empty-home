import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from '../components/Header';
import Footer from '../components/Footer';

const CustomerManagement = () => {
  const customers = [
    { id: 1, name: "أحمد محمد", email: "ahmed@example.com", points: 500 },
    { id: 2, name: "فاطمة علي", email: "fatima@example.com", points: 750 },
    { id: 3, name: "محمود حسن", email: "mahmoud@example.com", points: 1000 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">إدارة العملاء</h1>
        <div className="mb-6">
          <Input placeholder="البحث عن العملاء..." className="max-w-sm" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الاسم</TableHead>
              <TableHead>البريد الإلكتروني</TableHead>
              <TableHead>النقاط</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.points}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">تعديل</Button>
                  <Button variant="outline" size="sm">حذف</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-6">
          <Button>إضافة عميل جديد</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerManagement;
