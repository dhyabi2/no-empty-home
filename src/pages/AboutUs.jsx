import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">About Us</h1>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>At Loyalty App, our mission is to connect businesses with their customers through innovative reward programs. We strive to create a platform that benefits both merchants and consumers, fostering loyalty and enhancing the shopping experience.</p>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Founded in 2024, Loyalty App was born from the idea that loyalty programs should be simple, engaging, and rewarding. Our team of dedicated professionals works tirelessly to bring you the best loyalty experience possible.</p>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Email: support@loyaltyapp.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Loyalty Street, Rewardsville, RW 12345</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;