import React from 'react';
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Offer</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Coffee Shop XYZ has a new offer: Buy 1 Get 1 Free!
            </p>
            <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reward Earned</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Congratulations! You've earned a free coffee at Coffee Shop XYZ.
            </p>
            <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Update</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Your account details have been successfully updated.
            </p>
            <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Notifications;