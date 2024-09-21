import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ShopRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Shop Registration</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Register Your Shop</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="shopName">Shop Name</Label>
                <Input id="shopName" placeholder="Enter your shop name" />
              </div>
              <div>
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input id="ownerName" placeholder="Enter owner's name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
              </div>
              <div>
                <Label htmlFor="crNumber">CR Number</Label>
                <Input id="crNumber" placeholder="Enter your Commercial Registration number" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter your shop's location" />
              </div>
              <div>
                <Label htmlFor="logo">Upload Logo</Label>
                <Input id="logo" type="file" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">I agree to the terms and conditions</Label>
              </div>
              <Button type="submit" className="w-full">Register Shop</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ShopRegistration;