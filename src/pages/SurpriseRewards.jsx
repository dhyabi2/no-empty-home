import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Clock, Star } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurpriseRewards = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [isRevealed, setIsRevealed] = useState(false);
  const [reward, setReward] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const revealReward = () => {
    const surpriseRewards = [
      { title: "خصم 20٪ على طلبك التالي", points: 500 },
      { title: "قهوة مجانية", points: 200 },
      { title: "نقاط مضاعفة لمدة 24 ساعة", points: 1000 },
      { title: "قسيمة هدايا بقيمة 50 ريال", points: 750 },
    ];
    const randomReward = surpriseRewards[Math.floor(Math.random() * surpriseRewards.length)];
    setReward(randomReward);
    setIsRevealed(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">المكافآت المفاجئة</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>مكافأة اليوم المفاجئة</span>
              <Clock className="h-5 w-5 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isRevealed ? (
              <>
                <p className="text-center text-2xl font-bold mb-4">
                  {formatTime(timeLeft)}
                </p>
                <p className="text-center mb-4">
                  الوقت المتبقي للكشف عن مكافأتك المفاجئة!
                </p>
                <Button onClick={revealReward} className="w-full" disabled={timeLeft > 0}>
                  <Gift className="mr-2 h-4 w-4" />
                  كشف المكافأة
                </Button>
              </>
            ) : (
              <>
                <div className="text-center">
                  <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">{reward.title}</h2>
                  <p className="text-lg mb-4">{reward.points} نقطة</p>
                  <Button className="w-full">
                    استرداد المكافأة
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
              كيفية الحصول على المزيد من المكافآت المفاجئة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>قم بتسجيل الدخول يوميًا للحصول على فرصة الكشف عن مكافأة جديدة</li>
              <li>أكمل التحديات اليومية لزيادة فرصك في الحصول على مكافآت أفضل</li>
              <li>شارك تجربتك مع الأصدقاء للحصول على مكافآت إضافية</li>
              <li>تابع إشعارات التطبيق للحصول على تنبيهات حول المكافآت الخاصة</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SurpriseRewards;
