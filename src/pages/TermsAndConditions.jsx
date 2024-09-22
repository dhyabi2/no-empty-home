import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, CheckCircle } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">الشروط والأحكام</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-6 w-6" />
              شروط استخدام برنامج الولاء
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
              <div className="space-y-4">
                <section>
                  <h2 className="text-xl font-semibold mb-2">1. مقدمة</h2>
                  <p>
                    مرحبًا بك في برنامج الولاء الخاص بنا. باستخدامك لهذا التطبيق وخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">2. الأهلية</h2>
                  <p>
                    يجب أن يكون عمرك 18 عامًا على الأقل للمشاركة في برنامج الولاء. قد تنطبق قيود إضافية في بعض المناطق.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">3. كسب النقاط</h2>
                  <p>
                    يمكن كسب النقاط من خلال عمليات الشراء المؤهلة والأنشطة الترويجية. قد تختلف قيمة النقاط وطرق كسبها من وقت لآخر.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">4. استرداد المكافآت</h2>
                  <p>
                    يمكن استبدال النقاط بمكافآت وفقًا للشروط المحددة لكل مكافأة. قد تخضع بعض المكافآت لتوافر المخزون.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">5. صلاحية النقاط</h2>
                  <p>
                    قد تنتهي صلاحية النقاط إذا لم يتم استخدامها خلال فترة زمنية محددة. يرجى مراجعة حسابك بانتظام للاطلاع على تواريخ انتهاء الصلاحية.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">6. تعديل البرنامج</h2>
                  <p>
                    نحتفظ بالحق في تعديل أو إنهاء برنامج الولاء في أي وقت، مع إشعار مسبق عندما يكون ذلك ممكنًا.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">7. الخصوصية</h2>
                  <p>
                    نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية وفقًا لسياسة الخصوصية الخاصة بنا.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">8. الاتصال</h2>
                  <p>
                    إذا كانت لديك أي أسئلة أو استفسارات حول هذه الشروط والأحكام، يرجى الاتصال بفريق دعم العملاء.
                  </p>
                </section>

                <div className="flex items-center justify-center mt-6">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <p className="text-sm text-gray-600">
                    باستخدامك للتطبيق، فإنك توافق على هذه الشروط والأحكام.
                  </p>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
