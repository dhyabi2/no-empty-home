import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Confetti from '../components/Confetti';
import EarnPoints from '../components/EarnPoints';
import { useAuth } from '../contexts/AuthContext';
import { calculateDistance } from '../utils/distanceCalculator';
import FloatingActionButton from '../components/FloatingActionButton';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Gift, MapPin, Star, Zap, Activity, Award, TrendingUp } from "lucide-react";

const RewardOverview = lazy(() => import('../components/RewardOverview'));
const RewardRedemption = lazy(() => import('../components/RewardRedemption'));
const FeaturedOffers = lazy(() => import('../components/FeaturedOffers'));
const NearbyShops = lazy(() => import('../components/NearbyShops'));
const RewardConcierge = lazy(() => import('../components/RewardConcierge'));
const RewardTrivia = lazy(() => import('../components/RewardTrivia'));
const RewardPlanner = lazy(() => import('../components/RewardPlanner'));
const RewardShowcase = lazy(() => import('../components/RewardShowcase'));

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [nearbyShops, setNearbyShops] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [recentActivity, setRecentActivity] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [quickStats, setQuickStats] = useState({});

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* ... (existing JSX) */}
      <div className="flex flex-1 overflow-hidden">
        <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <WelcomeSection user={user} quickStats={quickStats} />
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MainContentSection
                isLoading={isLoading}
                user={user}
                handleEarnReward={handleEarnReward}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                recentActivity={recentActivity}
              />
              <QuickActionsSection />
            </div>
            <Separator />
            <OffersAndShopsSection isLoading={isLoading} nearbyShops={nearbyShops} />
            <Separator />
            <EventsAndLeaderboardSection upcomingEvents={upcomingEvents} leaderboard={leaderboard} />
            <Separator />
            <RewardConciergeSection />
            <Separator />
            <RewardTriviaSection />
            <Separator />
            <RewardPlannerSection />
            <Separator />
            <RewardShowcaseSection />
          </div>
        </main>
      </div>
      <FloatingActionButton />
    </div>
  );
};

// ... (existing component definitions)

const RewardShowcaseSection = React.memo(() => (
  <Suspense fallback={<div>Loading Reward Showcase...</div>}>
    <RewardShowcase />
  </Suspense>
));

export default Index;
