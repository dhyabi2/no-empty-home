import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpSupport = () => {
  const handleContactSupport = (method) => {
    alert(`Contacting support via ${method}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" onClick={() => handleContactSupport('chat')}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat with Support
            </Button>
            <Button className="w-full" onClick={() => handleContactSupport('call')}>
              <Phone className="mr-2 h-4 w-4" />
              Call Support
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>How do I earn points?</li>
              <li>How can I redeem my rewards?</li>
              <li>What should I do if my points are not showing up?</li>
              <li>How do I update my account information?</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default HelpSupport;
