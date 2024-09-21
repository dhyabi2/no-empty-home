import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import Confetti from '../components/Confetti';
import EarnPoints from '../components/EarnPoints';
import { useAuth } from '../contexts/AuthContext';
import { calculateDistance } from '../utils/distanceCalculator';
import PullToRefresh from 'react-pull-to-refresh';
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

// Lazy load components
const RewardOverview = lazy(() => import('../components/RewardOverview'));
const RewardRedemption = lazy(() => import('../components/RewardRedemption'));
const FeaturedOffers = lazy(() => import('../components/FeaturedOffers'));
const NearbyShops = lazy(() => import('../components/NearbyShops'));

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

  const handleEarnReward = useCallback(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const toggleSideNav = useCallback(() => {
    setIsSideNavOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (navigator.geolocation && !userLocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
        (error) => console.error("Error getting user location:", error)
      );
    }
  }, [userLocation]);

  const memoizedNearbyShops = React.useMemo(() => {
    if (!userLocation) return [];

    const allShops = [
      { id: 1, name: "Coffee Haven", latitude: 40.7128, longitude: -74.0060, category: "Cafe" },
      { id: 2, name: "Tech Gadgets", latitude: 40.7112, longitude: -74.0055, category: "Electronics" },
      { id: 3, name: "Fresh Grocers", latitude: 40.7135, longitude: -74.0070, category: "Supermarket" },
    ];

    return allShops.map(shop => ({
      ...shop,
      distance: calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        shop.latitude,
        shop.longitude
      )
    })).sort((a, b) => a.distance - b.distance).slice(0, 3);
  }, [userLocation]);

  useEffect(() => {
    setNearbyShops(memoizedNearbyShops);
  }, [memoizedNearbyShops]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating API calls with setTimeout
      await new Promise(resolve => setTimeout(resolve, 500));
      setRecentActivity([
        { id: 1, action: "Earned 50 points", timestamp: "2 hours ago" },
        { id: 2, action: "Redeemed reward", timestamp: "1 day ago" },
        { id: 3, action: "Visited Coffee Haven", timestamp: "3 days ago" },
      ]);

      await new Promise(resolve => setTimeout(resolve, 500));
      setUpcomingEvents([
        { id: 1, title: "Double Points Day", date: "2024-04-15" },
        { id: 2, title: "New Reward Launch", date: "2024-04-20" },
        { id: 3, title: "Member Exclusive Sale", date: "2024-04-25" },
      ]);

      await new Promise(resolve => setTimeout(resolve, 500));
      setLeaderboard([
        { id: 1, name: "User 1", points: 1000, avatar: "U1" },
        { id: 2, name: "User 2", points: 950, avatar: "U2" },
        { id: 3, name: "User 3", points: 900, avatar: "U3" },
        { id: 4, name: "User 4", points: 850, avatar: "U4" },
        { id: 5, name: "User 5", points: 800, avatar: "U5" },
      ]);

      setQuickStats({
        totalPoints: 1250,
        visitsThisMonth: 8,
        rewardsRedeemed: 3,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {showConfetti && <Confetti />}
      <Header onMenuClick={toggleSideNav} />
      <div className="flex flex-1 overflow-hidden">
        <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
        <PullToRefresh onRefresh={handleRefresh} className="flex-1 overflow-y-auto">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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
          </main>
        </PullToRefresh>
      </div>
      <Footer />
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
        <Button variant="outline" className="flex flex-col items-center justify-center h-24">
          <Gift className="h-6 w-6 mb-2" />
          Redeem
        </Button>
        <Button variant="outline" className="flex flex-col items-center justify-center h-24">
          <MapPin className="h-6 w-6 mb-2" />
          Find Shops
        </Button>
        <Button variant="outline" className="flex flex-col items-center justify-center h-24">
          <Star className="h-6 w-6 mb-2" />
          Favorites
        </Button>
        <Button variant="outline" className="flex flex-col items-center justify-center h-24">
          <Zap className="h-6 w-6 mb-2" />
          Earn Points
        </Button>
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

export default Index;
