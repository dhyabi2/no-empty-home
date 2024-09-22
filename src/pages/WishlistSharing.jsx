import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Share2, Copy, Facebook, Twitter, WhatsApp } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const WishlistSharing = () => {
  const [shareLink, setShareLink] = useState('https://example.com/wishlist/123456');
  const [message, setMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      alert('تم نسخ الرابط إلى الحافظة');
    });
  };

  const shareToSocialMedia = (platform) => {
    // هنا يمكنك إضافة منطق المشاركة الفعلي لكل منصة
    console.log(`مشاركة على ${platform}: ${shareLink}`);
    alert(`تمت المشاركة على ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">مشاركة قائمة الأمنيات</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Share2 className="mr-2 h-6 w-6" />
              مشاركة قائمتك
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex mb-4">
              <Input value={shareLink} readOnly className="flex-grow" />
              <Button onClick={copyToClipboard} className="ml-2">
                <Copy className="h-4 w-4 mr-2" />
                نسخ
              </Button>
            </div>
            <Textarea
              placeholder="أضف رسالة شخصية (اختياري)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-4"
            />
            <div className="flex space-x-2">
              <Button onClick={() => shareToSocialMedia('Facebook')} className="flex-1">
                <Facebook className="h-4 w-4 mr-2" />
                فيسبوك
              </Button>
              <Button onClick={() => shareToSocialMedia('Twitter')} className="flex-1">
                <Twitter className="h-4 w-4 mr-2" />
                تويتر
              </Button>
              <Button onClick={() => shareToSocialMedia('WhatsApp')} className="flex-1">
                <WhatsApp className="h-4 w-4 mr-2" />
                واتساب
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>نصائح لمشاركة قائمة الأمنيات</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>شارك قائمتك مع العائلة والأصدقاء قبل المناسبات الخاصة</li>
              <li>قم بتحديث قائمتك بانتظام لضمان أن العناصر لا تزال متاحة</li>
              <li>أضف ملاحظات شخصية لكل عنصر لتوضيح سبب رغبتك فيه</li>
              <li>استخدم وسائل التواصل الاجتماعي للوصول إلى جمهور أوسع</li>
              <li>قم بإنشاء قوائم مختلفة للمناسبات المختلفة (عيد الميلاد، الزفاف، إلخ)</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default WishlistSharing;
