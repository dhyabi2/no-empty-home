import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { QrCode, Camera, Clock, Gift } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardAndScanSystem = () => {
  const [scanMode, setScanMode] = useState('qr'); // 'qr' or 'manual'
  const [manualCode, setManualCode] = useState('');

  const handleScan = () => {
    // هنا سيتم تنفيذ عملية المسح الفعلية
    alert('تم بدء عملية المسح');
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    // هنا سيتم التحقق من الرمز المدخل يدويًا
    alert(`تم إدخال الرمز: ${manualCode}`);
    setManualCode('');
  };

  const recentScans = [
    { id: 1, shop: "متجر الإلكترونيات", date: "2024-03-15", points: 50 },
    { id: 2, shop: "سوبر ماركت الرخاء", date: "2024-03-10", points: 30 },
    { id: 3, shop: "مطعم اللذائذ", date: "2024-03-05", points: 25 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">نظام المكافآت والمسح</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>مسح للحصول على المكافآت</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-4 mb-4">
              <Button
                variant={scanMode === 'qr' ? 'default' : 'outline'}
                onClick={() => setScanMode('qr')}
              >
                <QrCode className="h-5 w-5 ml-2" />
                مسح رمز QR
              </Button>
              <Button
                variant={scanMode === 'manual' ? 'default' : 'outline'}
                onClick={() => setScanMode('manual')}
              >
                إدخال الرمز يدويًا
              </Button>
            </div>
            
            {scanMode === 'qr' ? (
              <div className="text-center">
                <div className="bg-gray-200 h-64 flex items-center justify-center mb-4 rounded-lg">
                  <Camera className="h-16 w-16 text-gray-400" />
                </div>
                <Button onClick={handleScan}>بدء المسح</Button>
              </div>
            ) : (
              <form onSubmit={handleManualSubmit} className="space-y-4">
                <Input
                  placeholder="أدخل رمز المكافأة"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                />
                <Button type="submit" className="w-full">تحقق من الرمز</Button>
              </form>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>عمليات المسح الأخيرة</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentScans.map((scan) => (
                <li key={scan.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-semibold">{scan.shop}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 ml-1" />
                      {scan.date}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Gift className="h-5 w-5 ml-1 text-primary" />
                    <span className="font-bold">{scan.points} نقطة</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardAndScanSystem;
