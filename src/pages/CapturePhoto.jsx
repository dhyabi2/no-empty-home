import React from 'react';
import { Camera } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const CapturePhoto = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">التقاط صورة</h1>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <Camera className="h-24 w-24 text-primary mb-4" />
          <p className="text-lg text-center mb-4">انقر لالتقاط صورة</p>
          <p className="text-sm text-gray-500">هذه الصفحة ستحتوي على وظيفة التقاط الصور في التطبيق الفعلي</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CapturePhoto;