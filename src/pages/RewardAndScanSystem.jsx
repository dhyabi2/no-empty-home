import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Barcode, CheckCircle, Settings } from "lucide-react";

const RewardAndScanSystem = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Reward & Scan System</h1>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configure Rewards
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="scan">
          <TabsList className="mb-4">
            <TabsTrigger value="scan">Scan Barcode</TabsTrigger>
            <TabsTrigger value="result">Scan Result</TabsTrigger>
            <TabsTrigger value="config">Reward Configuration</TabsTrigger>
          </TabsList>

          <TabsContent value="scan">
            <Card>
              <CardHeader>
                <CardTitle>Scan Customer Barcode</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <Barcode className="h-32 w-32 text-gray-400" />
                </div>
                <p className="text-center text-sm text-gray-500">
                  Position the barcode within the frame to scan
                </p>
                <Button className="w-full">
                  Scan Barcode
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="result">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  Scan Successful
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Customer Name</Label>
                  <Input value="John Doe" readOnly />
                </div>
                <div>
                  <Label>Points Earned</Label>
                  <Input value="50" readOnly />
                </div>
                <div>
                  <Label>Total Points</Label>
                  <Input value="1250" readOnly />
                </div>
                <Button className="w-full">
                  Confirm and Add Points
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="config">
            <Card>
              <CardHeader>
                <CardTitle>Reward Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Points per Purchase</Label>
                  <Input type="number" placeholder="Enter points per purchase" />
                </div>
                <div>
                  <Label>Minimum Purchase Amount</Label>
                  <Input type="number" placeholder="Enter minimum purchase amount" />
                </div>
                <div>
                  <Label>Points Expiry (in days)</Label>
                  <Input type="number" placeholder="Enter points expiry in days" />
                </div>
                <Button className="w-full">
                  Save Configuration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default RewardAndScanSystem;