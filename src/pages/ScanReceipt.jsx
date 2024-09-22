import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const ScanReceipt = () => {
  const [scannedPoints, setScannedPoints] = useState(null);
  const navigate = useNavigate();

  const handleScan = () => {
    // Simulate scanning process
    setTimeout(() => {
      setScannedPoints(Math.floor(Math.random() * 50) + 10);
    }, 1500);
  };

  const handleConfirm = () => {
    // In a real app, this would update the user's points
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Scan Receipt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scannedPoints === null ? (
              <>
                <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                  <Camera className="h-16 w-16 text-gray-400" />
                </div>
                <Button className="w-full" onClick={handleScan}>
                  <Camera className="mr-2 h-4 w-4" /> Scan Receipt
                </Button>
                <Button variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" /> Upload Receipt
                </Button>
              </>
            ) : (
              <>
                <p className="text-center text-lg">Points earned:</p>
                <p className="text-center text-3xl font-bold">{scannedPoints}</p>
                <Button className="w-full" onClick={handleConfirm}>
                  Confirm and Add Points
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ScanReceipt;