import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Gift } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import { motion } from 'framer-motion';
import Confetti from '../components/Confetti';
import Shimmer from '../components/Shimmer';
import EarnPoints from '../components/EarnPoints';
import RewardRedemption from '../components/RewardRedemption';
import { useAuth } from '../contexts/AuthContext';
import { calculateDistance } from '../utils/distanceCalculator';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const [nearbyShops, setNearbyShops] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Mock data for shops (in a real app, this would be fetched from an API)
      const allShops = [
        { id: 1, name: "Coffee Haven", latitude: 40.7128, longitude: -74.0060, category: "Cafe" },
        { id: 2, name: "Tech Gadgets", latitude: 40.7112, longitude: -74.0055, category: "Electronics" },
        { id: 3, name: "Fresh Grocers", latitude: 40.7135, longitude: -74.0070, category: "Supermarket" },
        { id: 4, name: "Book Nook", latitude: 40.7140, longitude: -74.0080, category: "Bookstore" },
        { id: 5, name: "Fitness First", latitude: 40.7120, longitude: -74.0050, category: "Gym" },
      ];

      // Calculate distances and sort shops
      const shopsWithDistances = allShops.map(shop => ({
        ...shop,
        distance: calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          shop.latitude,
          shop.longitude
        )
      }));

      const sortedShops = shopsWithDistances.sort((a, b) => a.distance - b.distance);
      setNearbyShops(sortedShops.slice(0, 3)); // Get top 3 nearest shops
    }
  }, [userLocation]);

  const handleEarnReward = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {showConfetti && <Confetti />}
      <SideNav />
      <div className="flex-1 ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Reward Overview</h2>
            <Card>
              <CardHeader>
                <CardTitle>Your Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Shimmer height="24px" width="150px" />
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
                  <Shimmer height="16px" width="200px" />
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

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Redeem Rewards</h2>
            <RewardRedemption />
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Featured Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {isLoading ? (
                [...Array(3)].map((_, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <Shimmer height="24px" width="80%" />
                    </CardHeader>
                    <CardContent>
                      <Shimmer height="16px" width="60%" className="mb-2" />
                      <Shimmer height="16px" width="40%" className="mb-4" />
                      <Shimmer height="36px" width="100%" />
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
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Nearby Shops</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {isLoading ? (
                [...Array(3)].map((_, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <Shimmer height="24px" width="80%" />
                    </CardHeader>
                    <CardContent>
                      <Shimmer height="16px" width="60%" className="mb-2" />
                      <Shimmer height="16px" width="40%" className="mb-4" />
                      <Shimmer height="36px" width="100%" />
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
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
