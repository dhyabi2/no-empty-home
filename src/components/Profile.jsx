import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Save, User, Mail, Phone, MapPin, Gift, Star } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" dir="rtl">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">الملف الشخصي</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>المعلومات الشخصية</span>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 ml-2" />
                  تعديل
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">تغيير الصورة</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">الاسم</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <User className="h-5 w-5" />
                      </span>
                      <Input id="name" placeholder="أحمد محمد" className="rounded-l-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <Mail className="h-5 w-5" />
                      </span>
                      <Input id="email" type="email" placeholder="ahmed@example.com" className="rounded-l-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">رقم الهاتف</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <Phone className="h-5 w-5" />
                      </span>
                      <Input id="phone" placeholder="+966 12 345 6789" className="rounded-l-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">العنوان</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <Input id="address" placeholder="الرياض، المملكة العربية السعودية" className="rounded-l-none" />
                    </div>
                  </div>
                </div>
                <Button className="w-full">
                  <Save className="h-4 w-4 ml-2" />
                  حفظ التغييرات
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="h-5 w-5 ml-2" />
                  نقاط الولاء
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5,250</p>
                <p className="text-sm text-gray-500">نقطة متاحة</p>
                <Button className="w-full mt-4">استبدال النقاط</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 ml-2" />
                  مستوى العضوية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">الذهبي</p>
                <p className="text-sm text-gray-500">750 نقطة للمستوى التالي</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
