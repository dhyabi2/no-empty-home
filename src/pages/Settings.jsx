import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bell, Lock, HelpCircle, LogOut } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Settings = () => {
  const handleEditProfile = () => {
    alert('Editing profile');
  };

  const handleNotificationSettings = () => {
    alert('Adjusting notification settings');
  };

  const handlePrivacySettings = () => {
    alert('Updating privacy settings');
  };

  const handleHelpSupport = () => {
    alert('Accessing help and support');
  };

  const handleLogout = () => {
    alert('Logging out');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" onClick={handleEditProfile}>
              <User className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
            <Button className="w-full justify-start" onClick={handleNotificationSettings}>
              <Bell className="mr-2 h-4 w-4" />
              Notification Settings
            </Button>
            <Button className="w-full justify-start" onClick={handlePrivacySettings}>
              <Lock className="mr-2 h-4 w-4" />
              Privacy Settings
            </Button>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full justify-start" onClick={handleHelpSupport}>
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </Button>
          </CardContent>
        </Card>
        <Button variant="destructive" className="w-full" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
