import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, HelpCircle, MessageCircle, PhoneCall } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpAndSupport = () => {
  const faqItems = [
    { question: "كيف يمكنني كسب النقاط؟", answer: "يمكنك كسب النقاط من خلال إجراء عمليات شراء في المتاجر المشاركة، والمشاركة في العروض الترويجية، وإحالة الأصدقاء إلى البرنامج." },
    { question: "متى تنتهي صلاحية نقاطي؟", answer: "تختلف فترة صلاحية النقاط حسب نوع البرنامج. يرجى مراجعة شروط وأحكام برنامجك المحدد للحصول على معلومات دقيقة حول انتهاء صلاحية النقاط." },
    { question: "كيف يمكنني استبدال نقاطي؟", answer: "يمكنك استبدال نقاطك من خلال قسم 'استبدال النقاط' في التطبيق. اختر المكافأة التي ترغب فيها واتبع التعليمات لإتمام عملية الاستبدال." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">المساعدة والدعم</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>البحث في الأسئلة الشائعة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="ابحث عن سؤالك هنا..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {faqItems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>اتصل بنا</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="الاسم" />
              <Input type="email" placeholder="البريد الإلكتروني" />
              <Textarea placeholder="رسالتك" rows={4} />
              <Button type="submit" className="w-full">إرسال</Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <HelpCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">مركز المساعدة</h3>
              <p className="text-center text-sm text-gray-600">اعثر على إجابات لأسئلتك الشائعة</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <MessageCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">الدردشة المباشرة</h3>
              <p className="text-center text-sm text-gray-600">تحدث مع أحد ممثلي خدمة العملاء</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <PhoneCall className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">اتصل بنا</h3>
              <p className="text-center text-sm text-gray-600">اتصل بنا على 1234-567-890</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpAndSupport;
