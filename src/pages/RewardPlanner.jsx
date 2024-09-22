import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';
import RewardPlanner from '../components/RewardPlanner';

const RewardPlannerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Planner</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Plan Your Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Set your reward goals and track your progress towards achieving them. The Reward Planner helps you visualize your journey and stay motivated.
            </p>
          </CardContent>
        </Card>
        <RewardPlanner />
      </main>
      <Footer />
    </div>
  );
};

export default RewardPlannerPage;