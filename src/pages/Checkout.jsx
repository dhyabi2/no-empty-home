import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
  const [total, setTotal] = useState(100);
  const [coupon, setCoupon] = useState('');

  const handleApplyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setTotal(prevTotal => prevTotal * 0.9);
      alert('تم تطبيق الكوبون بنجاح!');
    } else {
      alert('رمز الكوبون غير صالح.');
    }
  };

  const handleCompletePurchase = () => {
    alert('تم إكمال الشراء بنجاح!');
    // في التطبيق الحقيقي، سيتم التوجيه إلى صفحة التأكيد
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>الدفع</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold">الإجمالي: ${total.toFixed(2)}</p>
              </div>
              <div className="flex space-x-2">
                <Input
                  placeholder="أدخل رمز الكوبون"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <Button onClick={handleApplyCoupon}>تطبيق الكوبون</Button>
              </div>
              <Button onClick={handleCompletePurchase} className="w-full">
                إكمال الشراء
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
