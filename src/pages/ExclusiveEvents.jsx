import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExclusiveEvents = () => {
  const events = [
    {
      id: 1,
      title: "ليلة التسوق الحصرية",
      date: "2023-05-15",
      location: "مول الفخامة",
      attendees: 50,
    },
    {
      id: 2,
      title: "تجربة تذوق الطعام الفاخر",
      date: "2023-06-01",
      location: "مطعم الذواقة",
      attendees: 30,
    },
    {
      id: 3,
      title: "معاينة أحدث التقنيات",
      date: "2023-06-15",
      location: "مركز الابتكار",
      attendees: 100,
    },
  ];

  const handleJoinEvent = (eventId) => {
    alert(`لقد انضممت إلى الفعالية رقم: ${eventId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">الفعاليات الحصرية</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="ml-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="ml-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="ml-2 h-4 w-4" />
                    <span>{event.attendees} مشارك</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => handleJoinEvent(event.id)}
                >
                  الانضمام للفعالية
                </Button>
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
