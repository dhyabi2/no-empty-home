import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Tag, Clock } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NearbyOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة جلب العروض من API
    setTimeout(() => {
      const mockOffers = [
        { id: 1, title: "خصم 20% على القهوة", shop: "كوفي هافن", distance: 0.5, expiresIn: "3 ساعات" },
        { id: 2, title: "اشترِ واحدة واحصل على الثانية مجانًا", shop: "بيتزا بلاس", distance: 0.8, expiresIn: "5 ساعات" },
        { id: 3, title: "خصم 30% على الكتب", shop: "مكتبة المعرفة", distance: 1.2, expiresIn: "2 أيام" },
        { id: 4, title: "عرض خاص على الإلكترونيات", shop: "تك ستور", distance: 1.5, expiresIn: "1 يوم" },
      ];
      setOffers(mockOffers);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">العروض القريبة</h1>
        
        {loading ? (
          <p className="text-center">جارٍ تحميل العروض...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <Card key={offer.id}>
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{offer.shop}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 ml-1" />
                      <span>{offer.distance} كم</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 ml-1" />
                      <span>ينتهي خلال {offer.expiresIn}</span>
                    </div>
                  </div>
                  <Link to={`/offers/${offer.id}`}>
                    <Button className="w-full">عرض التفاصيل</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Tag className="h-6 w-6 ml-2 text-primary" />
              نصائح للحصول على أفضل العروض
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>قم بتفعيل خدمات الموقع للحصول على العروض الأقرب إليك</li>
              <li>تحقق من التطبيق بانتظام للاطلاع على أحدث العروض</li>
              <li>استخدم الفلاتر لتخصيص العروض حسب اهتماماتك</li>
              <li>شارك العروض مع أصدقائك للحصول على مكافآت إضافية</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default NearbyOffers;
