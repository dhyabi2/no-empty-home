import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      alert('Invalid coupon code');
    }
  };

  const handleCompletePurchase = () => {
    alert('Purchase completed successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="coupon">Coupon Code</Label>
                <div className="flex space-x-2">
                  <Input
                    id="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code"
                  />
                  <Button onClick={handleApplyCoupon}>Apply</Button>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
              </div>
              <Button className="w-full" onClick={handleCompletePurchase}>
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