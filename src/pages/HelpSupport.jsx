import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Mail, Phone, MessageSquare } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I earn rewards?</AccordionTrigger>
                    <AccordionContent>
                      You can earn rewards by making purchases at participating shops. Each purchase earns you points, which can be redeemed for various rewards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I redeem my rewards?</AccordionTrigger>
                    <AccordionContent>
                      To redeem your rewards, simply visit the Rewards section in the app and select the reward you'd like to claim. You can then show the redemption code to the shop staff.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I transfer my points to another user?</AccordionTrigger>
                    <AccordionContent>
                      Currently, points are non-transferable between users. They are tied to your individual account and can only be earned and redeemed by you.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
            <Card>
              <CardContent className="space-y-4 pt-6">
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

          <section className="md:col-span-2">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpSupport;
