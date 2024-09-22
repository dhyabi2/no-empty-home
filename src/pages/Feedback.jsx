import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يتم إرسال الملاحظات إلى الخادم
    console.log('تم إرسال الملاحظات:', { category, feedback });
    alert('شكراً لك على ملاحظاتك!');
    setFeedback('');
    setCategory('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">الملاحظات والاقتراحات</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              الفئة
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="اختر فئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">عام</SelectItem>
                <SelectItem value="app">التطبيق</SelectItem>
                <SelectItem value="rewards">المكافآت</SelectItem>
                <SelectItem value="customer-service">خدمة العملاء</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
              ملاحظاتك
            </label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="أخبرنا برأيك..."
              rows={5}
            />
          </div>
          <Button type="submit" className="w-full">
            إرسال الملاحظات
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
