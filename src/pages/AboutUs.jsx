import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">من نحن</h1>
        <Card>
          <CardHeader>
            <CardTitle>مهمتنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p>في تطبيق الولاء، مهمتنا هي ربط الشركات بعملائهم من خلال برامج مكافآت مبتكرة. نسعى جاهدين لإنشاء منصة تفيد كلاً من التجار والمستهلكين، وتعزز الولاء وتحسن تجربة التسوق.</p>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>قصتنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p>تأسس تطبيق الولاء في عام 2024، وُلد من فكرة أن برامج الولاء يجب أن تكون بسيطة وجذابة ومجزية. يعمل فريقنا من المهنيين المتفانين بلا كلل لتقديم أفضل تجربة ولاء ممكنة لك.</p>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>اتصل بنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p>البريد الإلكتروني: support@loyaltyapp.com</p>
            <p>الهاتف: (555) 123-4567</p>
            <p>العنوان: 123 شارع الولاء، مدينة المكافآت، RW 12345</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
