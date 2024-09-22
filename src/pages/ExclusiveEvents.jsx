import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExclusiveEvents = () => {
  const events = [
    { id: 1, title: "VIP Shopping Night", date: "2024-04-15", location: "Luxury Mall", attendees: 50 },
    { id: 2, title: "Gourmet Tasting Experience", date: "2024-05-01", location: "Fine Dining Restaurant", attendees: 30 },
    { id: 3, title: "Exclusive Product Launch", date: "2024-05-20", location: "Tech Store", attendees: 100 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Exclusive Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </p>
                <p className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="mr-2 h-4 w-4" />
                  {event.attendees} attendees
                </p>
                <Button className="w-full">RSVP Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExclusiveEvents;