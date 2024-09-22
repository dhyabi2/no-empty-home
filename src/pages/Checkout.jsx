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
      alert('Coupon applied successfully!');
    } else {
      alert('Invalid coupon code.');
    }
  };

  const handleCompletePurchase = () => {
    alert('Purchase completed successfully!');
    // In a real app, this would navigate to a confirmation page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
              </div>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <Button onClick={handleApplyCoupon}>Apply Coupon</Button>
              </div>
              <Button onClick={handleCompletePurchase} className="w-full">
                Complete Purchase
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