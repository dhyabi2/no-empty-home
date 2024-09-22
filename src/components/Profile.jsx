import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=John',
    interests: [],
  });

  const interests = ['Shopping', 'Dining', 'Entertainment', 'Travel', 'Technology'];

  const handleInterestChange = (interest) => {
    setProfileData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const profileCompleteness = () => {
    let score = 0;
    if (profileData.name) score += 25;
    if (profileData.email) score += 25;
    if (profileData.avatar) score += 25;
    if (profileData.interests.length > 0) score += 25;
    return score;
  };

  const handleUploadProfilePicture = () => {
    alert("Profile picture uploaded successfully!");
    // In a real app, this would trigger a file upload process
  };

  const handleChangePassword = () => {
    alert("Password changed successfully!");
    // In a real app, this would update the user's password
  };

  const handleUpdateEmail = () => {
    alert("Email updated successfully!");
    // In a real app, this would update the user's email
  };

  const handleDeleteAccount = () => {
    alert("Account deleted successfully!");
    // In a real app, this would delete the user's account
  };

  const handleEditPaymentMethod = () => {
    alert("Payment method updated successfully!");
    // In a real app, this would update the user's payment method
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={profileData.avatar} alt={profileData.name} />
            <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.email}</p>
          </div>
        </div>

        <div>
          <Label>Profile Completeness</Label>
          <Progress value={profileCompleteness()} className="mt-2" />
          <p className="text-sm text-gray-500 mt-1">{profileCompleteness()}% complete</p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={profileData.name}
              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            />
          </div>
          <div>
            <Label>Avatar</Label>
            <Select
              value={profileData.avatar}
              onValueChange={(value) => setProfileData({...profileData, avatar: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an avatar" />
              </SelectTrigger>
              <SelectContent>
                {['John', 'Jane', 'Bob', 'Alice'].map((seed) => (
                  <SelectItem key={seed} value={`https://api.dicebear.com/6.x/avataaars/svg?seed=${seed}`}>
                    Avatar {seed}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Interests</Label>
            <div className="mt-2 space-y-2">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={profileData.interests.includes(interest)}
                    onCheckedChange={() => handleInterestChange(interest)}
                  />
                  <label htmlFor={interest} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-full" onClick={handleUploadProfilePicture}>Upload Profile Picture</Button>
          <Button className="w-full" onClick={handleChangePassword}>Change Password</Button>
          <Button className="w-full" onClick={handleUpdateEmail}>Update Email</Button>
          <Button className="w-full" onClick={handleEditPaymentMethod}>Edit Payment Method</Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAccount}>Delete Account</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <Button className="w-full">Save Changes</Button>
      </CardContent>
    </Card>
  );
};

export default Profile;
