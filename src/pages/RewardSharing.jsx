import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Instagram } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardSharing = () => {
  const dummyReward = {
    id: 1,
    title: "Free Coffee",
    description: "Enjoy a free coffee at any participating cafe",
    points: 100,
  };

  const handleShare = (platform) => {
    // In a real app, this would open a sharing dialog or API
    console.log(`Sharing reward on ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Share Your Reward</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Share2 className="mr-2" />
              {dummyReward.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{dummyReward.description}</p>
            <p className="font-semibold mb-6">Points: {dummyReward.points}</p>
            <div className="space-y-4">
              <Button className="w-full" onClick={() => handleShare('Facebook')}>
                <Facebook className="mr-2 h-4 w-4" />
                Share on Facebook
              </Button>
              <Button className="w-full" onClick={() => handleShare('Twitter')}>
                <Twitter className="mr-2 h-4 w-4" />
                Share on Twitter
              </Button>
              <Button className="w-full" onClick={() => handleShare('Instagram')}>
                <Instagram className="mr-2 h-4 w-4" />
                Share on Instagram
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardSharing;