import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon, MapPinIcon } from "lucide-react";

const PersonalizedShopRecommendations = () => {
  // بيانات وهمية للعرض
  const recommendations = [
    { id: 1, name: "كوفي هافن", category: "مقهى", rating: 4.5, distance: "0.5 كم" },
    { id: 2, name: "تك جادجتس", category: "إلكترونيات", rating: 4.2, distance: "1.2 كم" },
    { id: 3, name: "جنة القراء", category: "مكتبة", rating: 4.7, distance: "0.8 كم" },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto mb-6">
      <CardHeader>
        <CardTitle>توصيات المتاجر الشخصية</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((shop) => (
            <Card key={shop.id}>
              <CardContent className="flex items-center p-4">
                <div className="flex-grow">
                  <h3 className="font-semibold">{shop.name}</h3>
                  <p className="text-sm text-gray-500">{shop.category}</p>
                  <div className="flex items-center mt-1">
                    <StarIcon className="h-4 w-4 text-yellow-400 ml-1" />
                    <span className="text-sm">{shop.rating}</span>
                    <MapPinIcon className="h-4 w-4 text-gray-400 mr-2 ml-1" />
                    <span className="text-sm">{shop.distance}</span>
                  </div>
                </div>
                <Button size="sm">زيارة</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalizedShopRecommendations;
