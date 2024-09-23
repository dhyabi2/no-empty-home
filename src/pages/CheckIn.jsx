import React from 'react';
import { MapPin } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const CheckIn = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">تسجيل الدخول</h1>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <MapPin className="h-24 w-24 text-primary mb-4" />
          <p className="text-lg text-center mb-4">سجل دخولك للحصول على نقاط إضافية</p>
          <p className="text-sm text-gray-500">هذه الصفحة ستتيح للمستخدمين تسجيل دخولهم في المواقع المشاركة في التطبيق الفعلي</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckIn;