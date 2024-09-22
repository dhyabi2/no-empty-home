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

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [nearbyShops, setNearbyShops] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [recentActivity, setRecentActivity] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [quickStats, setQuickStats] = useState({});

  useEffect(() => {
    // Simulating data loading
    setTimeout(() => {
      setIsLoading(false);
      setQuickStats({
        totalPoints: 1250,
        rewardsRedeemed: 5,
        shopsVisited: 8
      });
      setRecentActivity([
        { title: "Earned 50 points", description: "Purchase at Coffee Shop", time: "2 hours ago" },
        { title: "Redeemed reward", description: "Free coffee", time: "1 day ago" },
        { title: "Visited new shop", description: "Bookstore XYZ", time: "3 days ago" }
      ]);
      setUpcomingEvents([
        { title: "Double Points Weekend", date: "This weekend" },
        { title: "New Reward Launch", date: "Next Monday" }
      ]);
      setLeaderboard([
        { name: "John D.", points: 2500, avatar: "/avatar1.png" },
        { name: "Sarah M.", points: 2300, avatar: "/avatar2.png" },
        { name: "Mike R.", points: 2100, avatar: "/avatar3.png" }
      ]);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header onMenuClick={() => setIsSideNavOpen(true)} />
      {showConfetti && <Confetti />}
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
                handleEarnReward={() => {}}
                recentActivity={recentActivity}
              />
              <QuickActionsSection />
            </div>
            <Separator />
            <OffersAndShopsSection isLoading={isLoading} nearbyShops={nearbyShops} />
            <Separator />
            <EventsAndLeaderboardSection upcomingEvents={upcomingEvents} leaderboard={leaderboard} />
            <Separator />
            <RewardPlannerSection />
            <Separator />
            <RewardTriviaSection />
            <Separator />
            <RewardConciergeSection />
          </div>
        </main>
      </div>
      <FloatingActionButton />
    </div>
  );
};

const WelcomeSection = React.memo(({ user, quickStats }) => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Guest'}!</h1>
      <p className="text-gray-600">Here's your loyalty program overview</p>
    </div>
    <div className="flex space-x-4">
      <QuickStat icon={<Star className="h-5 w-5" />} label="Total Points" value={quickStats.totalPoints || 0} />
      <QuickStat icon={<Gift className="h-5 w-5" />} label="Rewards Redeemed" value={quickStats.rewardsRedeemed || 0} />
      <QuickStat icon={<MapPin className="h-5 w-5" />} label="Shops Visited" value={quickStats.shopsVisited || 0} />
    </div>
  </div>
));

const QuickStat = ({ icon, label, value }) => (
  <div className="text-center">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mx-auto mb-2">
      {icon}
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const MainContentSection = React.memo(({ isLoading, user, handleEarnReward, recentActivity }) => (
  <Card className="col-span-2">
    <CardHeader>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="redeem">Redeem</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
      </TabsHeader>
    <CardContent>
      <TabsContent value="overview">
        <Suspense fallback={<div>Loading...</div>}>
          <RewardOverview isLoading={isLoading} user={user} handleEarnReward={handleEarnReward} />
        </Suspense>
      </TabsContent>
      <TabsContent value="redeem">
        <Suspense fallback={<div>Loading...</div>}>
          <RewardRedemption />
        </Suspense>
      </TabsContent>
      <TabsContent value="activity">
        <ActivityFeed activities={recentActivity} />
      </TabsContent>
    </CardContent>
  </Card>
));

const QuickActionsSection = React.memo(() => (
  <Card>
    <CardHeader>
      <CardTitle>Quick Actions</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      <Button className="w-full"><Gift className="mr-2 h-4 w-4" /> Redeem Points</Button>
      <Button className="w-full"><MapPin className="mr-2 h-4 w-4" /> Find Nearby Shops</Button>
      <Button className="w-full"><Bell className="mr-2 h-4 w-4" /> View Notifications</Button>
      <EarnPoints />
    </CardContent>
  </Card>
));

const OffersAndShopsSection = React.memo(({ isLoading, nearbyShops }) => (
  <div className="space-y-8">
    <Suspense fallback={<div>Loading Offers...</div>}>
      <FeaturedOffers isLoading={isLoading} />
    </Suspense>
    <Suspense fallback={<div>Loading Shops...</div>}>
      <NearbyShops isLoading={isLoading} nearbyShops={nearbyShops} />
    </Suspense>
  </div>
));

const EventsAndLeaderboardSection = React.memo(({ upcomingEvents, leaderboard }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar />
        <ScrollArea className="h-[200px] mt-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
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
            <div key={index} className="flex items-center mb-4 last:mb-0">
              <Badge variant={index < 3 ? "default" : "secondary"} className="mr-2">
                {index + 1}
              </Badge>
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.points} points</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  </div>
));

const ActivityFeed = ({ activities }) => (
  <ScrollArea className="h-[300px]">
    {activities.map((activity, index) => (
      <div key={index} className="flex items-start mb-4 last:mb-0">
        <div className="mr-4">
          <Badge variant="outline" className="rounded-full p-1">
            <Activity className="h-4 w-4" />
          </Badge>
        </div>
        <div>
          <p className="font-semibold">{activity.title}</p>
          <p className="text-sm text-gray-500">{activity.description}</p>
          <p className="text-xs text-gray-400">{activity.time}</p>
        </div>
      </div>
    ))}
  </ScrollArea>
);

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

const RewardPlannerSection = React.memo(() => (
  <Suspense fallback={<div>Loading Reward Planner...</div>}>
    <RewardPlanner />
  </Suspense>
));

export default Index;
