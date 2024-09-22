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

  useEffect(() => {
    const fetchData = async () => {
      // Simulating API calls
      await Promise.all([
        new Promise(resolve => setTimeout(() => {
          setRecentActivity([
            { id: 1, action: "Earned 50 points", timestamp: "2 hours ago" },
            { id: 2, action: "Redeemed reward", timestamp: "1 day ago" },
            { id: 3, action: "Visited Coffee Haven", timestamp: "3 days ago" },
          ]);
          resolve();
        }, 500)),
        new Promise(resolve => setTimeout(() => {
          setUpcomingEvents([
            { id: 1, title: "Double Points Day", date: "2024-04-15" },
            { id: 2, title: "New Reward Launch", date: "2024-04-20" },
            { id: 3, title: "Member Exclusive Sale", date: "2024-04-25" },
          ]);
          resolve();
        }, 500)),
        new Promise(resolve => setTimeout(() => {
          setLeaderboard([
            { id: 1, name: "User 1", points: 1000, avatar: "U1" },
            { id: 2, name: "User 2", points: 950, avatar: "U2" },
            { id: 3, name: "User 3", points: 900, avatar: "U3" },
            { id: 4, name: "User 4", points: 850, avatar: "U4" },
            { id: 5, name: "User 5", points: 800, avatar: "U5" },
          ]);
          resolve();
        }, 500)),
        new Promise(resolve => setTimeout(() => {
          setQuickStats({
            totalPoints: 1250,
            visitsThisMonth: 8,
            rewardsRedeemed: 3,
          });
          resolve();
        }, 500)),
      ]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleEarnReward = useCallback(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  const toggleSideNav = useCallback(() => {
    setIsSideNavOpen(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {showConfetti && <Confetti />}
      <Header onMenuClick={toggleSideNav} />
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
          </div>
        </main>
      </div>
      <FloatingActionButton />
    </div>
  );
};

const WelcomeSection = React.memo(({ user, quickStats }) => (
  <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
    <CardContent className="py-6">
      <h1 className="text-3xl font-bold mb-4">Welcome back, {user?.name || 'User'}!</h1>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">{quickStats.totalPoints}</p>
          <p className="text-sm">Total Points</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{quickStats.visitsThisMonth}</p>
          <p className="text-sm">Visits This Month</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{quickStats.rewardsRedeemed}</p>
          <p className="text-sm">Rewards Redeemed</p>
        </div>
      </div>
    </CardContent>
  </Card>
));

const MainContentSection = React.memo(({ isLoading, user, handleEarnReward, activeTab, setActiveTab, recentActivity }) => (
  <Card className="md:col-span-2">
    <CardContent>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="space-y-4">
            <Suspense fallback={<div>Loading...</div>}>
              <RewardOverview isLoading={isLoading} user={user} handleEarnReward={handleEarnReward} />
            </Suspense>
            <Progress value={75} className="w-full" />
            <p className="text-sm text-gray-500">75% progress to next tier</p>
          </div>
        </TabsContent>
        <TabsContent value="rewards">
          <Suspense fallback={<div>Loading...</div>}>
            <RewardRedemption />
          </Suspense>
        </TabsContent>
        <TabsContent value="activity">
          <ScrollArea className="h-[200px]">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex justify-between items-center py-2">
                <span>{activity.action}</span>
                <Badge variant="secondary">{activity.timestamp}</Badge>
              </div>
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
));

const QuickActionsSection = React.memo(() => (
  <Card>
    <CardHeader>
      <CardTitle>Quick Actions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/redeem">
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <Gift className="h-6 w-6 mb-2" />
            Redeem
          </Button>
        </Link>
        <Link to="/shops">
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <MapPin className="h-6 w-6 mb-2" />
            Find Shops
          </Button>
        </Link>
        <Link to="/favorites">
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <Star className="h-6 w-6 mb-2" />
            Favorites
          </Button>
        </Link>
        <Link to="/earn-points">
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <Zap className="h-6 w-6 mb-2" />
            Earn Points
          </Button>
        </Link>
      </div>
    </CardContent>
  </Card>
));

const OffersAndShopsSection = React.memo(({ isLoading, nearbyShops }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card>
      <CardHeader>
        <CardTitle>Featured Offers</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div>Loading...</div>}>
          <FeaturedOffers isLoading={isLoading} />
        </Suspense>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Nearby Shops</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div>Loading...</div>}>
          <NearbyShops isLoading={isLoading} nearbyShops={nearbyShops} />
        </Suspense>
      </CardContent>
    </Card>
  </div>
));

const EventsAndLeaderboardSection = React.memo(({ upcomingEvents, leaderboard }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={new Date()}
          className="rounded-md border"
        />
        <ScrollArea className="h-[200px] mt-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex justify-between items-center py-2">
              <span>{event.title}</span>
              <Badge>{new Date(event.date).toLocaleDateString()}</Badge>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {leaderboard.map((user, index) => (
            <div key={user.id} className="flex items-center space-x-4 py-2">
              <span className="font-bold">{index + 1}</span>
              <Avatar>
                <AvatarFallback>{user.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.points} points</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  </div>
));

const RewardConciergeSection = React.memo(() => (
  <Suspense fallback={<div>Loading Reward Concierge...</div>}>
    <RewardConcierge />
  </Suspense>
));

const RewardTriviaSection = React.memo(() => (
  <Suspense fallback={<div>Loading Reward Trivia...</div>}>
    <RewardTrivia />
  </Suspense>
));

export default Index;
