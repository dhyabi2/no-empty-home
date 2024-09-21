import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Mail, Phone, MessageSquare } from "lucide-react";

const HelpAndSupport = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I set up my loyalty program?</AccordionTrigger>
                    <AccordionContent>
                      To set up your loyalty program, go to the Settings page and navigate to the "Reward Settings" tab. Here you can configure points per purchase, minimum purchase amount, and other program details.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How can I create a new offer?</AccordionTrigger>
                    <AccordionContent>
                      To create a new offer, go to the Offer Management page and click on the "Create New Offer" button. Fill in the required details such as offer title, description, and validity period.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I view customer data?</AccordionTrigger>
                    <AccordionContent>
                      You can view customer data in the Customer Management section. Here you'll find a list of all your customers, their points balance, and transaction history.
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
            <h2 className="text-xl font-semibold mb-4">Report an Issue</h2>
            <Card>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="issue-type" className="block text-sm font-medium text-gray-700">Issue Type</label>
                    <select id="issue-type" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      <option>Technical Problem</option>
                      <option>Account Issue</option>
                      <option>Feature Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <Textarea id="description" placeholder="Please describe the issue in detail" rows={4} />
                  </div>
                  <div>
                    <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment (optional)</label>
                    <Input id="attachment" type="file" />
                  </div>
                  <Button type="submit">Submit Issue</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HelpAndSupport;