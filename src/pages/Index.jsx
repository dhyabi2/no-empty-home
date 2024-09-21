import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Gift, Tag } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import { motion } from 'framer-motion';
import Confetti from '../components/Confetti';
import Skeleton from '../components/Skeleton';
import EarnPoints from '../components/EarnPoints';
import RewardRedemption from '../components/RewardRedemption';
import { useAuth } from '../contexts/AuthContext';
import { calculateDistance } from '../utils/distanceCalculator';
import PullToRefresh from 'react-pull-to-refresh';
import FloatingActionButton from '../components/FloatingActionButton';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [nearbyShops, setNearbyShops] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
        (error) => console.error("Error getting user location:", error)
      );
    }
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (userLocation) {
      const allShops = [
        { id: 1, name: "Coffee Haven", latitude: 40.7128, longitude: -74.0060, category: "Cafe" },
        { id: 2, name: "Tech Gadgets", latitude: 40.7112, longitude: -74.0055, category: "Electronics" },
        { id: 3, name: "Fresh Grocers", latitude: 40.7135, longitude: -74.0070, category: "Supermarket" },
      ];
      const shopsWithDistances = allShops.map(shop => ({
        ...shop,
        distance: calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          shop.latitude,
          shop.longitude
        )
      }));
      setNearbyShops(shopsWithDistances.sort((a, b) => a.distance - b.distance).slice(0, 3));
    }
  }, [userLocation]);

  const handleEarnReward = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleScanQR = () => {
    console.log("Scanning QR code...");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {showConfetti && <Confetti />}
      <SideNav />
      <div className="flex-1 ml-64">
        <Header />
        <PullToRefresh onRefresh={handleRefresh}>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <RewardOverview isLoading={isLoading} user={user} handleEarnReward={handleEarnReward} />
            <RewardRedemption />
            <FeaturedOffers isLoading={isLoading} />
            <NearbyShops isLoading={isLoading} nearbyShops={nearbyShops} />
          </main>
        </PullToRefresh>
        <Footer />
        <FloatingActionButton onClick={handleScanQR} />
      </div>
    </div>
  );
};

const RewardOverview = ({ isLoading, user, handleEarnReward }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4">Reward Overview</h2>
    <Card>
      <CardHeader>
        <CardTitle>Your Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-32 mb-2" />
        ) : (
          <motion.p
            className="text-3xl font-bold mb-2"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {user.points} points
          </motion.p>
        )}
        {isLoading ? (
          <Skeleton className="h-4 w-48 mb-2" />
        ) : (
          <p className="text-sm text-gray-500">Next reward: 250 points away</p>
        )}
        <div className="mt-4 bg-gray-200 h-2 rounded-full">
          <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
        </div>
        <Button className="mt-4" onClick={handleEarnReward} disabled={isLoading}>
          Simulate Earning Reward
        </Button>
        <EarnPoints />
      </CardContent>
    </Card>
  </section>
);

const FeaturedOffers = ({ isLoading }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4">Featured Offers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {isLoading ? (
        [...Array(3)].map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/3 mb-4" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))
      ) : (
        [
          { id: 1, title: "50% Off Coffee", shop: "Cafe Delight", expires: "3 days left" },
          { id: 2, title: "Buy 1 Get 1 Free", shop: "Burger Haven", expires: "1 week left" },
          { id: 3, title: "20% Off Books", shop: "Bookworm's Paradise", expires: "5 days left" }
        ].map((offer) => (
          <Card key={offer.id}>
            <CardHeader>
              <CardTitle>{offer.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{offer.shop}</p>
              <p className="text-xs text-red-500 mt-2">{offer.expires}</p>
              <Link to={`/offers/${offer.id}`}>
                <Button className="mt-4 w-full">View Offer</Button>
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </div>
    <div className="mt-4 text-center">
      <Link to="/offers">
        <Button variant="outline">
          <Tag className="mr-2 h-4 w-4" />
          View All Offers
        </Button>
      </Link>
    </div>
  </section>
);

const NearbyShops = ({ isLoading, nearbyShops }) => (
  <section>
    <h2 className="text-xl font-semibold mb-4">Nearby Shops</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {isLoading ? (
        [...Array(3)].map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/3 mb-4" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))
      ) : (
        nearbyShops.map((shop) => (
          <Card key={shop.id}>
            <CardHeader>
              <CardTitle>{shop.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{shop.category}</p>
              <p className="text-xs mt-2">
                <MapPin className="inline-block h-4 w-4 mr-1" />
                {shop.distance} km
              </p>
              <Link to={`/shops/${shop.id}`}>
                <Button className="mt-4 w-full">View Shop</Button>
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  </section>
);

export default Index;
