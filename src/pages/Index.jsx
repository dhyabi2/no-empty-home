import React, { useState, useEffect, useCallback } from 'react';
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
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // Task 1: Use useCallback for event handlers
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

  // Task 2: Optimize useEffect dependencies
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Task 3: Use navigator.geolocation only once
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

  // Task 4: Memoize expensive calculations
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

  // Task 5: Update nearbyShops only when memoizedNearbyShops changes
  useEffect(() => {
    setNearbyShops(memoizedNearbyShops);
  }, [memoizedNearbyShops]);

  // Task 6: Implement lazy loading for components
  const LazyConfetti = React.lazy(() => import('../components/Confetti'));

  // Task 7: Use React.memo for child components
  const MemoizedRewardOverview = React.memo(RewardOverview);
  const MemoizedRewardRedemption = React.memo(RewardRedemption);
  const MemoizedFeaturedOffers = React.memo(FeaturedOffers);
  const MemoizedNearbyShops = React.memo(NearbyShops);

  // Task 8: Implement error boundary
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.error("Error caught by boundary:", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
    }
  }

  // Task 9: Implement windowing for long lists (if needed)
  // This would typically be done in the FeaturedOffers or NearbyShops components

  // Task 10: Use passive event listeners for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Scroll handling logic here
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {showConfetti && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyConfetti />
          </React.Suspense>
        )}
        <Header onMenuClick={toggleSideNav} />
        <div className="flex flex-1 overflow-hidden">
          <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
          <PullToRefresh onRefresh={handleRefresh} className="flex-1 overflow-y-auto">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1">
                  <MemoizedRewardOverview isLoading={isLoading} user={user} handleEarnReward={handleEarnReward} />
                </div>
                <div className="md:col-span-1">
                  <MemoizedRewardRedemption />
                </div>
              </div>
              <div className="mt-8">
                <MemoizedFeaturedOffers isLoading={isLoading} />
              </div>
              <div className="mt-8">
                <MemoizedNearbyShops isLoading={isLoading} nearbyShops={nearbyShops} />
              </div>
            </main>
          </PullToRefresh>
        </div>
        <Footer />
        <div className="fixed bottom-16 right-4 z-10">
          <FloatingActionButton />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
