import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
        <Card>
          <CardHeader>
            <CardTitle>1. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p>By using the Loyalty App, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.</p>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>2. Use of Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You agree to use the Loyalty App only for lawful purposes and in accordance with these Terms. You are prohibited from using the app in any way that could damage, disable, or impair the service.</p>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>3. Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your use of the Loyalty App is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.</p>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>4. Modifications to Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We reserve the right to modify or discontinue the Loyalty App at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;