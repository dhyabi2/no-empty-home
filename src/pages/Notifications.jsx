import React from 'react';
import { Bell, Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Notifications = () => {
  const notifications = [
    { id: 1, title: "New Offer", message: "Coffee Shop XYZ has a new offer: Buy 1 Get 1 Free!", time: "2 hours ago", icon: <Bell className="h-4 w-4 text-blue-500" /> },
    { id: 2, title: "Reward Earned", message: "Congratulations! You've earned a free coffee at Coffee Shop XYZ.", time: "1 day ago", icon: <Check className="h-4 w-4 text-green-500" /> },
    { id: 3, title: "Account Update", message: "Your account details have been successfully updated.", time: "3 days ago", icon: <Bell className="h-4 w-4 text-blue-500" /> },
  ];

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
        {notifications.map((notification) => (
          <Card key={notification.id} className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{notification.title}</CardTitle>
              {notification.icon}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-400">{notification.time}</p>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default Notifications;
