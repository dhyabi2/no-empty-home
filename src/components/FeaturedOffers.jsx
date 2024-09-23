import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "lucide-react";
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const FeaturedOffers = ({ isLoading }) => {
  const offers = [
    { id: 1, title: "خصم 50% على القهوة", shop: "كافيه ديلايت", expires: "باقي 3 أيام" },
    { id: 2, title: "اشتر واحدة واحصل على الثانية مجانًا", shop: "برجر هافن", expires: "باقي أسبوع واحد" },
    { id: 3, title: "خصم 20% على الكتب", shop: "جنة القراء", expires: "باقي 5 أيام" },
    { id: 4, title: "حلوى مجانية", shop: "حلويات لذيذة", expires: "باقي يومان" },
    { id: 5, title: "خصم 30% على الإلكترونيات", shop: "عالم التقنية", expires: "باقي 4 أيام" }
  ];

  return (
    <section className="mb-8" dir="rtl">
      <h2 className="text-xl font-semibold mb-4">العروض المميزة</h2>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/3 mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Carousel>
          <CarouselContent>
            {offers.map((offer) => (
              <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>{offer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{offer.shop}</p>
                    <p className="text-xs text-red-500 mt-2">{offer.expires}</p>
                    <Link to={`/offers/${offer.id}`}>
                      <Button className="mt-4 w-full">عرض العرض</Button>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      <div className="mt-4 text-center">
        <Link to="/offers">
          <Button variant="outline">
            <Tag className="ml-2 h-4 w-4" />
            عرض جميع العروض
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedOffers;
