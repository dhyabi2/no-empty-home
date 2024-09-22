import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift } from "lucide-react";

const RewardGifting = () => {
  const [selectedReward, setSelectedReward] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');

  const dummyRewards = [
    { id: 1, name: "Free Coffee", points: 100 },
    { id: 2, name: "10% Discount", points: 200 },
    { id: 3, name: "Movie Ticket", points: 500 },
  ];

  const handleGift = () => {
    console.log(`Gifting ${selectedReward} to ${recipientEmail}`);
    // In a real app, this would send the gift to the recipient
    alert('Gift sent successfully!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="mr-2" />
          Gift a Reward
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <Label htmlFor="reward">Select a Reward</Label>
            <Select value={selectedReward} onValueChange={setSelectedReward}>
              <SelectTrigger id="reward">
                <SelectValue placeholder="Choose a reward" />
              </SelectTrigger>
              <SelectContent>
                {dummyRewards.map((reward) => (
                  <SelectItem key={reward.id} value={reward.name}>
                    {reward.name} ({reward.points} points)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="email">Recipient's Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter recipient's email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </div>
          <Button onClick={handleGift} disabled={!selectedReward || !recipientEmail}>
            Send Gift
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RewardGifting;