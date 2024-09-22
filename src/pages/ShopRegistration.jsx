import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Store, MapPin, Phone, Mail, FileText, Upload } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShopRegistration = () => {
  const [shopData, setShopData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    category: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCategoryChange = (value) => {
    setShopData(prevData => ({
      ...prevData,
      category: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('بيانات التسجيل:', shopData);
    alert('تم إرسال طلب التسجيل بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">تسجيل متجر جديد</h1>
        <Card>
          <CardHeader>
            <CardTitle>معلومات المتجر</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  اسم المتجر
                </label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    value={shopData.name}
                    onChange={handleInputChange}
                    placeholder="أدخل اسم المتجر"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  العنوان
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="address"
                    name="address"
                    value={shopData.address}
                    onChange={handleInputChange}
                    placeholder="أدخل عنوان المتجر"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  رقم الهاتف
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    value={shopData.phone}
                    onChange={handleInputChange}
                    placeholder="أدخل رقم الهاتف"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={shopData.email}
                    onChange={handleInputChange}
                    placeholder="أدخل البريد الإلكتروني"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  فئة المتجر
                </label>
                <Select value={shopData.category} onValueChange={handleCategoryChange}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="اختر فئة المتجر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clothing">ملابس</SelectItem>
                    <SelectItem value="electronics">إلكترونيات</SelectItem>
                    <SelectItem value="food">مطاعم</SelectItem>
                    <SelectItem value="beauty">مستحضرات تجميل</SelectItem>
                    <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  وصف المتجر
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={shopData.description}
                  onChange={handleInputChange}
                  placeholder="أدخل وصفًا موجزًا للمتجر"
                  rows={4}
                />
              </div>
              <div>
                <label htmlFor="documents" className="block text-sm font-medium text-gray-700 mb-1">
                  المستندات المطلوبة
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>رفع الملفات</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">أو اسحب وأفلت</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF حتى 10MB
                    </p>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full">
                تقديم طلب التسجيل
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ShopRegistration;
