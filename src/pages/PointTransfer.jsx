import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRightLeft } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PointTransfer = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [pointsToTransfer, setPointsToTransfer] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    // In a real app, this would handle the actual transfer logic
    alert(`Transferred ${pointsToTransfer} points to ${recipientEmail}`);
    setRecipientEmail('');
    setPointsToTransfer('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Point Transfer</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowRightLeft className="mr-2 h-5 w-5" />
              Transfer Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTransfer} className="space-y-4">
              <div>
                <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700">Recipient's Email</label>
                <Input
                  id="recipientEmail"
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="pointsToTransfer" className="block text-sm font-medium text-gray-700">Points to Transfer</label>
                <Input
                  id="pointsToTransfer"
                  type="number"
                  value={pointsToTransfer}
                  onChange={(e) => setPointsToTransfer(e.target.value)}
                  required
                  min="1"
                />
              </div>
              <Button type="submit" className="w-full">Transfer Points</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PointTransfer;