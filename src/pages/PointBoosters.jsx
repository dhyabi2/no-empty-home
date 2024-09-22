import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bolt } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PointBoosters from '../components/PointBoosters';

const PointBoostersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Point Boosters</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bolt className="mr-2 h-5 w-5" />
              Accelerate Your Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Activate point boosters to earn rewards faster! These limited-time opportunities allow you to multiply your points on specific purchases or during special events.
            </p>
            <Button>How It Works</Button>
          </CardContent>
        </Card>
        <PointBoosters />
      </main>
      <Footer />
    </div>
  );
};

export default PointBoostersPage;