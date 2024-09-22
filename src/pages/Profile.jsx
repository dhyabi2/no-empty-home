import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, LogOut, Upload, Key, Globe, Trash } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PushNotificationSystem from '../components/PushNotificationSystem';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileDetails />
          <AccountActions />
          <SettingsLinks />
          <PushNotificationSystem />
        </div>
      </main>

      <Footer />
    </div>
  );
};

const ProfileDetails = () => (
  <Card>
    <CardHeader>
      <CardTitle>Profile Details</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center space-x-4 mb-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-500">john.doe@example.com</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input id="name" defaultValue="John Doe" className="mt-1" />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <Input id="mobile" defaultValue="+1 234 567 8900" className="mt-1" />
        </div>
        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <Input id="dob" type="date" defaultValue="1990-01-01" className="mt-1" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const AccountActions = () => (
  <Card>
    <CardHeader>
      <CardTitle>Account Actions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Button className="w-full" onClick={() => alert("Changing password...")}>
          <Key className="mr-2 h-4 w-4" /> Change Password
        </Button>
        <Button className="w-full" onClick={() => alert("Uploading profile picture...")}>
          <Upload className="mr-2 h-4 w-4" /> Upload Profile Picture
        </Button>
        <Button className="w-full" onClick={() => alert("Updating email...")}>
          <Globe className="mr-2 h-4 w-4" /> Update Email
        </Button>
        <Button className="w-full" variant="destructive" onClick={() => alert("Deleting account...")}>
          <Trash className="mr-2 h-4 w-4" /> Delete Account
        </Button>
        <Button variant="destructive" className="w-full">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </CardContent>
  </Card>
);

const SettingsLinks = () => (
  <Card>
    <CardHeader>
      <CardTitle>Settings</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        <li><Button variant="link" onClick={() => alert("Opening language settings...")}>Language Settings</Button></li>
        <li><Button variant="link" onClick={() => alert("Opening notification preferences...")}>Notification Preferences</Button></li>
        <li><Button variant="link" onClick={() => alert("Opening privacy settings...")}>Privacy Settings</Button></li>
      </ul>
    </CardContent>
  </Card>
);

export default Profile;
