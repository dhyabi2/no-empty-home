import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Gift } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PointDonation = () => {
  const [selectedCharity, setSelectedCharity] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  const charities = [
    { id: 1, name: "جمعية رعاية الأطفال" },
    { id: 2, name: "مؤسسة مكافحة السرطان" },
    { id: 3, name: "جمعية حماية البيئة" },
    { id: 4, name: "مؤسسة التعليم للجميع" },
  ];

  const handleDonation = () => {
    if (selectedCharity && donationAmount) {
      alert(`تم التبرع بـ ${donationAmount} نقطة لصالح ${selectedCharity} بنجاح!`);
      setSelectedCharity('');
      setDonationAmount('');
    } else {
      alert('الرجاء اختيار جمعية خيرية وإدخال عدد النقاط للتبرع.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">التبرع بالنقاط</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="h-6 w-6 ml-2 text-red-500" />
              تبرع بنقاطك لدعم قضية نبيلة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">يمكنك التبرع بنقاطك لدعم الجمعيات الخيرية والمساهمة في إحداث تغيير إيجابي في المجتمع.</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="charity" className="block text-sm font-medium text-gray-700 mb-1">
                  اختر الجمعية الخيرية
                </label>
                <Select value={selectedCharity} onValueChange={setSelectedCharity}>
                  <SelectTrigger id="charity">
                    <SelectValue placeholder="اختر جمعية خيرية" />
                  </SelectTrigger>
                  <SelectContent>
                    {charities.map((charity) => (
                      <SelectItem key={charity.id} value={charity.name}>
                        {charity.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="points" className="block text-sm font-medium text-gray-700 mb-1">
                  عدد النقاط للتبرع
                </label>
                <Input
                  id="points"
                  type="number"
                  placeholder="أدخل عدد النقاط"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
              <Button onClick={handleDonation} className="w-full">
                <Gift className="ml-2 h-5 w-5" />
                تبرع الآن
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>تأثير تبرعاتك</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">تساهم تبرعاتك في دعم مشاريع مهمة وإحداث فرق حقيقي في حياة الآخرين.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>توفير الطعام والمأوى للمحتاجين</li>
              <li>دعم البحوث الطبية ومكافحة الأمراض</li>
              <li>تمويل مشاريع التعليم في المناطق المحرومة</li>
              <li>المساهمة في حماية البيئة والحياة البرية</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PointDonation;
