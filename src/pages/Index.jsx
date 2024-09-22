import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Confetti from '../components/Confetti';
import EarnPoints from '../components/EarnPoints';
import { useAuth } from '../contexts/AuthContext';
import FloatingActionButton from '../components/FloatingActionButton';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Bell, Gift, MapPin, Star, Calendar, Zap, Cake, Share2, Grid, Bolt, Package, ArrowRightLeft, Gavel, Handshake, Heart, Target } from "lucide-react";

const LazyComponents = {
  RewardOverview: lazy(() => import('../components/RewardOverview')),
  RewardRedemption: lazy(() => import('../components/RewardRedemption')),
  FeaturedOffers: lazy(() => import('../components/FeaturedOffers')),
  NearbyShops: lazy(() => import('../components/NearbyShops')),
  RewardGifting: lazy(() => import('../components/RewardGifting')),
  RewardPlanner: lazy(() => import('../components/RewardPlanner')),
};

const Index = () => {
  const [state, setState] = useState({
    showConfetti: false,
    isLoading: true,
    isSideNavOpen: false,
    quickStats: {},
    recentActivity: [],
    upcomingEvents: [],
    leaderboard: [],
    nearbyShops: [],
    flashSales: [],
  });

  const { user } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        quickStats: {
          totalPoints: 1250,
          rewardsRedeemed: 5,
          shopsVisited: 8
        },
        recentActivity: [
          { title: "Earned 50 points", description: "Purchase at Coffee Shop", time: "2 hours ago" },
          { title: "Redeemed reward", description: "Free coffee", time: "1 day ago" },
          { title: "Visited new shop", description: "Bookstore XYZ", time: "3 days ago" }
        ],
        upcomingEvents: [
          { title: "Double Points Weekend", date: "This weekend" },
          { title: "New Reward Launch", date: "Next Monday" },
          { title: "VIP Shopping Night", date: "Next Friday" }
        ],
        leaderboard: [
          { name: "John D.", points: 2500, avatar: "/avatar1.png" },
          { name: "Sarah M.", points: 2300, avatar: "/avatar2.png" },
          { name: "Mike R.", points: 2100, avatar: "/avatar3.png" }
        ],
        nearbyShops: [
          { id: 1, name: "Coffee Haven", distance: "0.5 km", category: "Cafe" },
          { id: 2, name: "Book Nook", distance: "1.2 km", category: "Bookstore" },
          { id: 3, name: "Fitness First", distance: "2.0 km", category: "Gym" }
        ],
        flashSales: [
          { id: 1, title: "50% Off Coffee Maker", shop: "ElectroMart", endTime: "2024-03-25T18:00:00" },
          { id: 2, title: "Buy 1 Get 1 Free Books", shop: "Bookworm's Paradise", endTime: "2024-03-26T12:00:00" },
        ],
      }));
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header onMenuClick={() => setState(prevState => ({ ...prevState, isSideNavOpen: true }))} />
      {state.showConfetti && <Confetti />}
      <div className="flex flex-1 overflow-hidden">
        <SideNav isOpen={state.isSideNavOpen} onClose={() => setState(prevState => ({ ...prevState, isSideNavOpen: false }))} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <WelcomeSection user={user} quickStats={state.quickStats} />
            <Separator />
            <MainContent state={state} user={user} />
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

const MainContent = React.memo(({ state, user }) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="col-span-2">
        <CardHeader>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="redeem">Redeem</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="gift">Gift</TabsTrigger>
              <TabsTrigger value="planner">Planner</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <TabsContent value="overview">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponents.RewardOverview isLoading={state.isLoading} user={user} handleEarnReward={() => {}} />
            </Suspense>
          </TabsContent>
          <TabsContent value="redeem">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponents.RewardRedemption />
            </Suspense>
          </TabsContent>
          <TabsContent value="activity">
            <ActivityFeed activities={state.recentActivity} />
          </TabsContent>
          <TabsContent value="gift">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponents.RewardGifting />
            </Suspense>
          </TabsContent>
          <TabsContent value="planner">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponents.RewardPlanner />
            </Suspense>
          </TabsContent>
        </CardContent>
      </Card>
      <QuickActionsSection />
    </div>
    <Separator />
    <OffersAndShopsSection isLoading={state.isLoading} nearbyShops={state.nearbyShops} />
    <Separator />
    <EventsAndLeaderboardSection upcomingEvents={state.upcomingEvents} leaderboard={state.leaderboard} />
    <Separator />
    <FlashSalesSection flashSales={state.flashSales} />
  </>
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
      <Button className="w-full"><Calendar className="mr-2 h-4 w-4" /> Exclusive Events</Button>
      <Button className="w-full"><Cake className="mr-2 h-4 w-4" /> Birthday Rewards</Button>
      <Button className="w-full"><Share2 className="mr-2 h-4 w-4" /> Share Rewards</Button>
      <Button className="w-full"><Grid className="mr-2 h-4 w-4" /> Reward Categories</Button>
      <Button className="w-full"><Bolt className="mr-2 h-4 w-4" /> Point Boosters</Button>
      <Button className="w-full"><Package className="mr-2 h-4 w-4" /> Reward Bundles</Button>
      <Button className="w-full"><ArrowRightLeft className="mr-2 h-4 w-4" /> Point Transfer</Button>
      <Button className="w-full"><Gavel className="mr-2 h-4 w-4" /> Reward Auctions</Button>
      <Button className="w-full"><Gift className="mr-2 h-4 w-4" /> Surprise Rewards</Button>
      <Button className="w-full"><Handshake className="mr-2 h-4 w-4" /> Partner Rewards</Button>
      <Button className="w-full"><Heart className="mr-2 h-4 w-4" /> Point Donation</Button>
      <Button className="w-full"><Target className="mr-2 h-4 w-4" /> Reward Planner</Button>
      <EarnPoints />
    </CardContent>
  </Card>
));

export default Index;
