import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tag, Edit, Trash2 } from "lucide-react";

const OfferManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Offer Management</h1>
          <Button>Create New Offer</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="offerList">
          <TabsList className="mb-4">
            <TabsTrigger value="offerList">Offer List</TabsTrigger>
            <TabsTrigger value="addOffer">Add Offer</TabsTrigger>
          </TabsList>

          <TabsContent value="offerList">
            <div className="space-y-4">
              {[1, 2, 3].map((offer) => (
                <Card key={offer}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Summer Sale {offer}</span>
                      <div>
                        <Button variant="ghost" size="icon" className="mr-2">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      <Tag className="inline-block h-4 w-4 mr-1" />
                      50% off on selected items
                    </p>
                    <p className="text-sm mb-2">
                      Valid until: 31 Aug 2023
                    </p>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addOffer">
            <Card>
              <CardHeader>
                <CardTitle>Create New Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="offerTitle">Offer Title</Label>
                    <Input id="offerTitle" placeholder="Enter offer title" />
                  </div>
                  <div>
                    <Label htmlFor="offerDescription">Description</Label>
                    <Textarea id="offerDescription" placeholder="Enter offer description" />
                  </div>
                  <div>
                    <Label htmlFor="discountAmount">Discount Amount</Label>
                    <Input id="discountAmount" type="number" placeholder="Enter discount amount" />
                  </div>
                  <div>
                    <Label htmlFor="validUntil">Valid Until</Label>
                    <Input id="validUntil" type="date" />
                  </div>
                  <Button type="submit">Create Offer</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default OfferManagement;