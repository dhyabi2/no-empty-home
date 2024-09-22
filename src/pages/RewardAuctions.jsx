import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Gavel, Clock, Gift, ArrowUp } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RewardAuctions = () => {
  const [auctions, setAuctions] = useState([
    { id: 1, name: "تذاكر VIP لحفل موسيقي", currentBid: 5000, timeLeft: 7200, minBid: 5100 },
    { id: 2, name: "إقامة فاخرة لمدة 3 ليالي", currentBid: 8000, timeLeft: 3600, minBid: 8100 },
    { id: 3, name: "هاتف ذكي من الجيل الأحدث", currentBid: 10000, timeLeft: 10800, minBid: 10100 },
  ]);

  const [userBids, setUserBids] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setAuctions(prevAuctions =>
        prevAuctions.map(auction => ({
          ...auction,
          timeLeft: Math.max(0, auction.timeLeft - 1)
        }))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBidChange = (auctionId, value) => {
    setUserBids(prevBids => ({
      ...prevBids,
      [auctionId]: value
    }));
  };

  const placeBid = (auctionId) => {
    const bidAmount = Number(userBids[auctionId]);
    const auction = auctions.find(a => a.id === auctionId);
    
    if (bidAmount > auction.currentBid && bidAmount >= auction.minBid) {
      setAuctions(prevAuctions =>
        prevAuctions.map(a =>
          a.id === auctionId ? { ...a, currentBid: bidAmount, minBid: bidAmount + 100 } : a
        )
      );
      alert(`تم وضع مزايدة بنجاح: ${bidAmount} نقطة`);
    } else {
      alert('يرجى إدخال مزايدة أعلى من المزايدة الحالية والحد الأدنى للمزايدة.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">مزادات المكافآت</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <Card key={auction.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{auction.name}</span>
                  <Gavel className="h-5 w-5 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">المزايدة الحالية</p>
                  <p className="text-2xl font-bold">{auction.currentBid} نقطة</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">الوقت المتبقي</p>
                  <p className="text-xl font-semibold flex items-center">
                    <Clock className="h-5 w-5 ml-1 text-primary" />
                    {formatTime(auction.timeLeft)}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">الحد الأدنى للمزايدة</p>
                  <p className="text-lg">{auction.minBid} نقطة</p>
                </div>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="أدخل مزايدتك"
                    value={userBids[auction.id] || ''}
                    onChange={(e) => handleBidChange(auction.id, e.target.value)}
                  />
                  <Button onClick={() => placeBid(auction.id)}>
                    <ArrowUp className="h-4 w-4 ml-1" />
                    مزايدة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="h-6 w-6 ml-2" />
              كيفية المشاركة في المزادات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>اختر المكافأة التي ترغب في المزايدة عليها.</li>
              <li>أدخل عدد النقاط التي ترغب في المزايدة بها (يجب أن تكون أعلى من المزايدة الحالية).</li>
              <li>انقر على زر "مزايدة" لتأكيد مزايدتك.</li>
              <li>راقب الوقت المتبقي وقم بزيادة مزايدتك إذا تمت مزايدة أعلى.</li>
              <li>إذا كنت صاحب أعلى مزايدة عند انتهاء الوقت، تفوز بالمكافأة!</li>
            </ol>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RewardAuctions;
