import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, UserPlus, Edit, Trash2 } from "lucide-react";

const CustomerManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Customer
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="customerList">
          <TabsList className="mb-4">
            <TabsTrigger value="customerList">Customer List</TabsTrigger>
            <TabsTrigger value="customerProfile">Customer Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="customerList">
            <Card>
              <CardHeader>
                <CardTitle>Customer List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  <Input
                    placeholder="Search customers..."
                    className="max-w-sm mr-2"
                  />
                  <Button>
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Total Points</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "John Doe", email: "john@example.com", points: 1500 },
                      { name: "Jane Smith", email: "jane@example.com", points: 2200 },
                      { name: "Bob Johnson", email: "bob@example.com", points: 800 },
                    ].map((customer, index) => (
                      <TableRow key={index}>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.points}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="mr-2">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customerProfile">
            <Card>
              <CardHeader>
                <CardTitle>Customer Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-6">
                  <Avatar className="h-24 w-24 mr-4">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Customer" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-gray-500">john@example.com</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Total Points</h3>
                    <p>1,500</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Member Since</h3>
                    <p>January 15, 2023</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Last Visit</h3>
                    <p>March 10, 2024</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Favorite Products</h3>
                    <p>Coffee, Pastries</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interaction History</h3>
                  <ul className="list-disc list-inside">
                    <li>Purchased Coffee - March 10, 2024</li>
                    <li>Redeemed 500 points for free pastry - February 28, 2024</li>
                    <li>Earned 100 points - February 15, 2024</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CustomerManagement;