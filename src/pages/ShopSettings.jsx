import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

const ShopSettings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Shop Settings</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="business-profile">
          <TabsList className="mb-4">
            <TabsTrigger value="business-profile">Business Profile</TabsTrigger>
            <TabsTrigger value="reward-settings">Reward Settings</TabsTrigger>
            <TabsTrigger value="notification-settings">Notification Settings</TabsTrigger>
            <TabsTrigger value="account-settings">Account Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="business-profile">
            <Card>
              <CardHeader>
                <CardTitle>Business Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="shopName">Shop Name</Label>
                    <Input id="shopName" defaultValue="My Awesome Shop" />
                  </div>
                  <div>
                    <Label htmlFor="shopDescription">Shop Description</Label>
                    <Input id="shopDescription" defaultValue="We sell awesome products!" />
                  </div>
                  <div>
                    <Label htmlFor="shopAddress">Shop Address</Label>
                    <Input id="shopAddress" defaultValue="123 Main St, City, Country" />
                  </div>
                  <div>
                    <Label htmlFor="shopPhone">Shop Phone</Label>
                    <Input id="shopPhone" defaultValue="+1 234 567 8900" />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reward-settings">
            <Card>
              <CardHeader>
                <CardTitle>Reward Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="pointsPerDollar">Points Per Dollar Spent</Label>
                    <Input id="pointsPerDollar" type="number" defaultValue="10" />
                  </div>
                  <div>
                    <Label htmlFor="redeemRatio">Redeem Ratio (points to dollars)</Label>
                    <Input id="redeemRatio" type="number" defaultValue="100" />
                  </div>
                  <div>
                    <Label htmlFor="expiryDays">Points Expiry (days)</Label>
                    <Input id="expiryDays" type="number" defaultValue="365" />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notification-settings">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <Switch id="emailNotifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="pushNotifications">Push Notifications</Label>
                    <Switch id="pushNotifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="smsNotifications">SMS Notifications</Label>
                    <Switch id="smsNotifications" />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account-settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="shop@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button type="submit">Update Account</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ShopSettings;