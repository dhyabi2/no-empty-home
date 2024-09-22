import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const ScanReceipt = () => {
  const [scannedPoints, setScannedPoints] = useState(null);
  const navigate = useNavigate();

  const handleScan = () => {
    // محاكاة عملية المسح
    setTimeout(() => {
      setScannedPoints(Math.floor(Math.random() * 50) + 10);
    }, 1500);
  };

  const handleConfirm = () => {
    // في التطبيق الحقيقي، سيتم تحديث نقاط المستخدم هنا
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>مسح الإيصال</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scannedPoints === null ? (
              <>
                <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                  <Camera className="h-16 w-16 text-gray-400" />
                </div>
                <Button className="w-full" onClick={handleScan}>
                  <Camera className="ml-2 h-4 w-4" /> مسح الإيصال
                </Button>
                <Button variant="outline" className="w-full">
                  <Upload className="ml-2 h-4 w-4" /> رفع صورة الإيصال
                </Button>
              </>
            ) : (
              <>
                <p className="text-center text-lg">النقاط المكتسبة:</p>
                <p className="text-center text-3xl font-bold">{scannedPoints}</p>
                <Button className="w-full" onClick={handleConfirm}>
                  تأكيد وإضافة النقاط
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ScanReceipt;
