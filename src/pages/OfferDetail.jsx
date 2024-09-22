import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Tag, Share2 } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const OfferDetail = () => {
  const offer = {
    id: 1,
    title: "خصم 30٪ على جميع الأحذية الرياضية",
    shop: "متجر الرياضة الأول",
    description: "احصل على خصم 30٪ على جميع الأحذية الرياضية في متجرنا. يسري العرض على جميع الماركات والموديلات المتوفرة في المتجر.",
    expiryDate: "2024-06-30",
    location: "شارع الملك فهد، الرياض",
    category: "أحذية رياضية",
    pointsRequired: 500,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{offer.title}</CardTitle>
            <Badge variant="secondary">{offer.category}</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-2">{offer.shop}</p>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <div className="flex items-center mb-2">
              <Clock className="h-5 w-5 ml-2" />
              <span>ينتهي في: {new Date(offer.expiryDate).toLocaleDateString('ar-SA')}</span>
            </div>
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 ml-2" />
              <span>{offer.location}</span>
            </div>
            <div className="flex items-center mb-4">
              <Tag className="h-5 w-5 ml-2" />
              <span>{offer.pointsRequired} نقطة مطلوبة</span>
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1">استرداد العرض</Button>
              <Button variant="outline" className="flex items-center">
                <Share2 className="h-4 w-4 ml-2" />
                مشاركة
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default OfferDetail;
