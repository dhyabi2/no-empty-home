import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, Mail, Phone, MessageSquare } from "lucide-react";

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Card>
            <CardHeader>
              <CardTitle>How do I earn rewards?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You can earn rewards by making purchases at participating shops. Each purchase earns you points, which can be redeemed for various rewards.</p>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>How do I redeem my rewards?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>To redeem your rewards, simply visit the Rewards section in the app and select the reward you'd like to claim. You can then show the redemption code to the shop staff.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <Card>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@loyaltyapp.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>Live Chat (9 AM - 5 PM EST)</span>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Submit a Support Request</h2>
          <Card>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <Input id="subject" placeholder="Enter the subject of your request" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" placeholder="Describe your issue or question" rows={4} />
                </div>
                <div>
                  <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment (optional)</label>
                  <Input id="attachment" type="file" />
                </div>
                <Button type="submit">Submit Request</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default HelpSupport;