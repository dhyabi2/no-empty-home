import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import Confetti from '../components/Confetti';
import EarnPoints from '../components/EarnPoints';
import RewardRedemption from '../components/RewardRedemption';
import { useAuth } from '../contexts/AuthContext';
import { calculateDistance } from '../utils/distanceCalculator';
import PullToRefresh from 'react-pull-to-refresh';
import FloatingActionButton from '../components/FloatingActionButton';
import RewardOverview from '../components/RewardOverview';
import FeaturedOffers from '../components/FeaturedOffers';
import NearbyShops from '../components/NearbyShops';

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

export default Index;
