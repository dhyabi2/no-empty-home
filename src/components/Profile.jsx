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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Share2, Scan, Clock, Gift, Download, Trophy, Gamepad } from "lucide-react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=John',
    interests: [],
    birthday: new Date(),
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
    if (profileData.name) score += 20;
    if (profileData.email) score += 20;
    if (profileData.avatar) score += 20;
    if (profileData.interests.length > 0) score += 20;
    if (profileData.birthday) score += 20;
    return score;
  };

  const handleAction = (action) => {
    alert(`${action} action completed successfully!`);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <ProfileHeader profileData={profileData} />
        <ProfileProgress profileCompleteness={profileCompleteness} />
        <ProfileForm profileData={profileData} setProfileData={setProfileData} interests={interests} handleInterestChange={handleInterestChange} />
        <ProfileActions handleAction={handleAction} />
      </CardContent>
    </Card>
  );
};

const ProfileHeader = ({ profileData }) => (
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
);

const ProfileProgress = ({ profileCompleteness }) => (
  <div>
    <Label>Profile Completeness</Label>
    <Progress value={profileCompleteness()} className="mt-2" />
    <p className="text-sm text-gray-500 mt-1">{profileCompleteness()}% complete</p>
  </div>
);

const ProfileForm = ({ profileData, setProfileData, interests, handleInterestChange }) => (
  <div className="space-y-4">
    <ProfileInput label="Name" value={profileData.name} onChange={(e) => setProfileData({...profileData, name: e.target.value})} />
    <ProfileInput label="Email" type="email" value={profileData.email} onChange={(e) => setProfileData({...profileData, email: e.target.value})} />
    <ProfileAvatar value={profileData.avatar} onChange={(value) => setProfileData({...profileData, avatar: value})} />
    <ProfileInterests interests={interests} selectedInterests={profileData.interests} onChange={handleInterestChange} />
    <ProfileBirthday value={profileData.birthday} onChange={(date) => setProfileData({...profileData, birthday: date})} />
  </div>
);

const ProfileInput = ({ label, ...props }) => (
  <div>
    <Label htmlFor={props.id || label.toLowerCase()}>{label}</Label>
    <Input id={props.id || label.toLowerCase()} {...props} />
  </div>
);

const ProfileAvatar = ({ value, onChange }) => (
  <div>
    <Label>Avatar</Label>
    <Select value={value} onValueChange={onChange}>
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
);

const ProfileInterests = ({ interests, selectedInterests, onChange }) => (
  <div>
    <Label>Interests</Label>
    <div className="mt-2 space-y-2">
      {interests.map((interest) => (
        <div key={interest} className="flex items-center space-x-2">
          <Checkbox
            id={interest}
            checked={selectedInterests.includes(interest)}
            onCheckedChange={() => onChange(interest)}
          />
          <label htmlFor={interest} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {interest}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const ProfileBirthday = ({ value, onChange }) => (
  <div>
    <Label>Birthday</Label>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left font-normal mt-2">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  </div>
);

const ProfileActions = ({ handleAction }) => (
  <div className="space-y-2">
    <ActionButton icon={Share2} label="Share Welcome Reward" onClick={() => handleAction("Share Welcome Reward")} />
    <ActionButton icon={Scan} label="Scan to Earn Points" onClick={() => handleAction("Scan to Earn Points")} />
    <ActionButton icon={Clock} label="View Point History" onClick={() => handleAction("View Point History")} />
    <ActionButton icon={Gift} label="Redeem Offer" onClick={() => handleAction("Redeem Offer")} />
    <ActionButton icon={Share2} label="Share Wishlist" onClick={() => handleAction("Share Wishlist")} />
    <ActionButton icon={Scan} label="Scan Receipt" onClick={() => handleAction("Scan Receipt")} />
    <ActionButton icon={Download} label="Download Statement" onClick={() => handleAction("Download Statement")} />
    <ActionButton icon={Trophy} label="Share Achievement" onClick={() => handleAction("Share Achievement")} />
    <ActionButton icon={Gamepad} label="Play Mini-Game" onClick={() => handleAction("Play Mini-Game")} />
    <DeleteAccountButton onDelete={() => handleAction("Delete Account")} />
  </div>
);

const ActionButton = ({ icon: Icon, label, onClick }) => (
  <Button className="w-full" onClick={onClick}>
    <Icon className="mr-2 h-4 w-4" />
    {label}
  </Button>
);

const DeleteAccountButton = ({ onDelete }) => (
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
        <AlertDialogAction onClick={onDelete}>Delete Account</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Profile;
