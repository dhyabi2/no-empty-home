import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RewardGifting from '../components/RewardGifting';

const RewardGiftingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reward Gifting</h1>
        <RewardGifting />
      </main>
      <Footer />
    </div>
  );
};

export default RewardGiftingPage;