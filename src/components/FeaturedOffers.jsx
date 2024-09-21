import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "lucide-react";
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const FeaturedOffers = ({ isLoading }) => {
  const offers = [
    { id: 1, title: "50% Off Coffee", shop: "Cafe Delight", expires: "3 days left" },
    { id: 2, title: "Buy 1 Get 1 Free", shop: "Burger Haven", expires: "1 week left" },
    { id: 3, title: "20% Off Books", shop: "Bookworm's Paradise", expires: "5 days left" },
    { id: 4, title: "Free Dessert", shop: "Sweet Treats", expires: "2 days left" },
    { id: 5, title: "30% Off Electronics", shop: "Tech World", expires: "4 days left" }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Featured Offers</h2>
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
                      <Button className="mt-4 w-full">View Offer</Button>
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
            <Tag className="mr-2 h-4 w-4" />
            View All Offers
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedOffers;
