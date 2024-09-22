import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Feedback = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [shopOrOffer, setShopOrOffer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log({ rating, comment, shopOrOffer });
    alert('Thank you for your feedback!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Provide Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="shopOrOffer">Shop or Offer Name</Label>
                <Input
                  id="shopOrOffer"
                  value={shopOrOffer}
                  onChange={(e) => setShopOrOffer(e.target.value)}
                  placeholder="Enter shop or offer name"
                  required
                />
              </div>
              <div>
                <Label>Rating</Label>
                <div className="flex items-center space-x-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-8 w-8 cursor-pointer ${
                        star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="comment">Comments</Label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience..."
                  rows={4}
                />
              </div>
              <RadioGroup defaultValue="shop" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="shop" id="shop" />
                  <Label htmlFor="shop">This is for a shop</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="offer" id="offer" />
                  <Label htmlFor="offer">This is for an offer</Label>
                </div>
              </RadioGroup>
              <Button type="submit" className="w-full">Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
