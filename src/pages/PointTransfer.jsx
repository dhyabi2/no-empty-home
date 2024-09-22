import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PointTransfer = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [pointsToTransfer, setPointsToTransfer] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    alert(`Transferring ${pointsToTransfer} points to ${recipientEmail}`);
    // Reset form
    setRecipientEmail('');
    setPointsToTransfer('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Transfer Points</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTransfer} className="space-y-4">
              <div>
                <Label htmlFor="recipientEmail">Recipient's Email</Label>
                <Input
                  id="recipientEmail"
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="Enter recipient's email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="pointsToTransfer">Points to Transfer</Label>
                <Input
                  id="pointsToTransfer"
                  type="number"
                  value={pointsToTransfer}
                  onChange={(e) => setPointsToTransfer(e.target.value)}
                  placeholder="Enter amount of points"
                  min="1"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Transfer Points <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PointTransfer;
