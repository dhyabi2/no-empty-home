import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search as SearchIcon, MapPin, Tag } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({ shops: [], offers: [] });

  const handleSearch = () => {
    // نتائج بحث وهمية
    const mockShops = [
      { id: 1, name: "كوفي هافن", address: "123 الشارع الرئيسي، المدينة", description: "أفضل قهوة في المدينة" },
      { id: 2, name: "تك جادجتس", address: "456 شارع الدردار، المدينة", description: "أحدث الإلكترونيات والأجهزة" },
      { id: 3, name: "سوبر ماركت الطازج", address: "789 شارع البلوط، المدينة", description: "منتجات طازجة وبقالة" }
    ];

    const mockOffers = [
      { id: 1, title: "خصم 50٪ على القهوة", shop: "كوفي هافن", expiry: "31 مارس 2024" },
      { id: 2, title: "اشترِ واحدة واحصل على الثانية مجانًا", shop: "تك جادجتس", expiry: "15 أبريل 2024" },
      { id: 3, title: "خصم 20٪ على البقالة", shop: "سوبر ماركت الطازج", expiry: "30 أبريل 2024" }
    ];

    // تصفية النتائج بناءً على مصطلح البحث
    const filteredShops = mockShops.filter(shop => 
      shop.name.includes(searchTerm) ||
      shop.description.includes(searchTerm)
    );

    const filteredOffers = mockOffers.filter(offer => 
      offer.title.includes(searchTerm) ||
      offer.shop.includes(searchTerm)
    );

    setSearchResults({ shops: filteredShops, offers: filteredOffers });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <Input
            type="text"
            placeholder="ابحث عن المتاجر أو العروض..."
            className="flex-grow ml-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch}>
            <SearchIcon className="h-4 w-4 ml-2" />
            بحث
          </Button>
        </div>

        <Tabs defaultValue="shops">
          <TabsList className="mb-4">
            <TabsTrigger value="shops">المتاجر</TabsTrigger>
            <TabsTrigger value="offers">العروض</TabsTrigger>
          </TabsList>
          <TabsContent value="shops">
            <div className="space-y-4">
              {searchResults.shops.map((shop) => (
                <Card key={shop.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{shop.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      <MapPin className="inline-block h-4 w-4 ml-1" />
                      {shop.address}
                    </p>
                    <p className="text-sm mb-2">{shop.description}</p>
                    <Link to={`/shops/${shop.id}`}>
                      <Button variant="outline" size="sm">عرض التفاصيل</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="offers">
            <div className="space-y-4">
              {searchResults.offers.map((offer) => (
                <Card key={offer.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{offer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      <Tag className="inline-block h-4 w-4 ml-1" />
                      {offer.shop}
                    </p>
                    <p className="text-sm mb-2">
                      صالح حتى: {offer.expiry}
                    </p>
                    <Link to={`/offers/${offer.id}`}>
                      <Button variant="outline" size="sm">عرض العرض</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
