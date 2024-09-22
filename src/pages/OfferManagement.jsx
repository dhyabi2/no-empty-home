import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const OfferManagement = () => {
  const [offers, setOffers] = useState([
    { id: 1, title: "خصم 20٪ على الأجهزة الإلكترونية", startDate: "2024-05-01", endDate: "2024-05-31", status: "نشط" },
    { id: 2, title: "اشترِ واحدة واحصل على الثانية مجانًا", startDate: "2024-06-01", endDate: "2024-06-15", status: "قادم" },
    { id: 3, title: "خصم 50٪ على الملابس الصيفية", startDate: "2024-04-15", endDate: "2024-04-30", status: "منتهي" },
  ]);

  const handleDeleteOffer = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">إدارة العروض</h1>
          <Button>
            <PlusCircle className="ml-2 h-5 w-5" />
            إضافة عرض جديد
          </Button>
        </div>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>بحث العروض</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="ابحث عن العروض..." />
          </CardContent>
        </Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>عنوان العرض</TableHead>
              <TableHead>تاريخ البدء</TableHead>
              <TableHead>تاريخ الانتهاء</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offers.map((offer) => (
              <TableRow key={offer.id}>
                <TableCell>{offer.title}</TableCell>
                <TableCell>{offer.startDate}</TableCell>
                <TableCell>{offer.endDate}</TableCell>
                <TableCell>{offer.status}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="ml-2">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDeleteOffer(offer.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
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

export default OfferManagement;
