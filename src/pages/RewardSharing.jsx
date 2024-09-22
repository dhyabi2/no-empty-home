import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Share2, Facebook, Twitter, MessageCircle, Copy } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardSharing = () => {
  const [shareLink, setShareLink] = useState('https://example.com/reward/123');

  const handleShare = (platform) => {
    // Here you would implement the actual sharing logic
    alert(`تم المشاركة على ${platform}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      alert('تم نسخ الرابط إلى الحافظة');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">مشاركة المكافأة</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Share2 className="mr-2 h-6 w-6" />
              شارك مكافأتك
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">شارك هذه المكافأة مع أصدقائك وعائلتك!</p>
            <div className="flex space-x-4 mb-6">
              <Button onClick={() => handleShare('Facebook')} className="flex-1">
                <Facebook className="mr-2 h-4 w-4" />
                فيسبوك
              </Button>
              <Button onClick={() => handleShare('Twitter')} className="flex-1">
                <Twitter className="mr-2 h-4 w-4" />
                تويتر
              </Button>
              <Button onClick={() => handleShare('WhatsApp')} className="flex-1">
                <MessageCircle className="mr-2 h-4 w-4" />
                واتساب
              </Button>
            </div>
            <div className="flex items-center">
              <Input value={shareLink} readOnly className="flex-grow mr-2" />
              <Button onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>إحصائيات المشاركة</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">عدد المشاركات: 15</p>
            <p className="mb-2">عدد الاستردادات: 5</p>
            <p>النقاط المكتسبة من المشاركة: 250</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardSharing;
