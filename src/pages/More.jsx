import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, HelpCircle, Info, FileText, LogOut } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const More = () => {
  const moreItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help-support' },
    { icon: Info, label: 'About Us', path: '/about-us' },
    { icon: FileText, label: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">More</h1>
        <div className="space-y-4">
          {moreItems.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <Link to={item.path} className="flex items-center">
                  <item.icon className="h-6 w-6 mr-4 text-gray-500" />
                  <span className="text-lg">{item.label}</span>
                </Link>
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardContent className="p-4">
              <Button variant="destructive" className="w-full flex items-center justify-center">
                <LogOut className="h-6 w-6 mr-2" />
                Log Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default More;
