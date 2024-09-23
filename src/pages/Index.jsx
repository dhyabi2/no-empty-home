import React from 'react';
import { motion } from "framer-motion";
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import WelcomeReward from '../components/WelcomeReward';
import ShopVisitGameElement from '../components/ShopVisitGameElement';
import PersonalizedShopRecommendations from '../components/PersonalizedShopRecommendations';
import PointBoosters from '../components/PointBoosters';
import RewardConcierge from '../components/RewardConcierge';
import SocialSharing from '../components/SocialSharing';
import GamifiedChallenges from '../components/GamifiedChallenges';
import VirtualLoyaltyCard from '../components/VirtualLoyaltyCard';
import FloatingActionButton from '../components/FloatingActionButton';
import NearbyShops from '../components/NearbyShops';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pb-20">
        <h1 className="text-3xl font-bold mb-6">مرحبًا بك في تطبيق الولاء</h1>
        
        <WelcomeReward />
        
        <div className="mt-8 space-y-8">
          <ShopVisitGameElement />
          <PersonalizedShopRecommendations />
          <NearbyShops />
          <PointBoosters />
          <RewardConcierge />
          <SocialSharing />
          <GamifiedChallenges />
          <VirtualLoyaltyCard />
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation />
      </div>
      <FloatingActionButton />
    </div>
  );
};

export default Index;
