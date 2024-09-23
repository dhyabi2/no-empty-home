import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    preferredRewards: '',
    interests: [],
    notificationPreferences: {
      email: false,
      push: false,
      sms: false,
    },
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCheckboxChange = (interest) => {
    setUserData(prevState => ({
      ...prevState,
      interests: prevState.interests.includes(interest)
        ? prevState.interests.filter(i => i !== interest)
        : [...prevState.interests, interest]
    }));
  };

  const handleNotificationPreferenceChange = (type) => {
    setUserData(prevState => ({
      ...prevState,
      notificationPreferences: {
        ...prevState.notificationPreferences,
        [type]: !prevState.notificationPreferences[type]
      }
    }));
  };

  return (
    <Card className="w-full max-w-lg mx-auto" dir="rtl">
      <CardHeader>
        <CardTitle>مرحبًا بك في تطبيق الولاء</CardTitle>
        <Progress value={(step / totalSteps) * 100} className="mt-2" />
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">الاسم</Label>
              <Input
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="أدخل اسمك"
              />
            </div>
            <div>
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <Label>المكافآت المفضلة</Label>
            <RadioGroup
              value={userData.preferredRewards}
              onValueChange={(value) => setUserData({...userData, preferredRewards: value})}
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="cashback" id="cashback" />
                <Label htmlFor="cashback">استرداد نقدي</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="points" id="points" />
                <Label htmlFor="points">نقاط</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="discounts" id="discounts" />
                <Label htmlFor="discounts">خصومات</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <Label>الاهتمامات</Label>
            {['التسوق', 'المطاعم', 'السفر', 'الترفيه'].map((interest) => (
              <div key={interest} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={interest}
                  checked={userData.interests.includes(interest)}
                  onCheckedChange={() => handleCheckboxChange(interest)}
                />
                <Label htmlFor={interest}>{interest}</Label>
              </div>
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <Label>تفضيلات الإشعارات</Label>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox
                id="emailNotifications"
                checked={userData.notificationPreferences.email}
                onCheckedChange={() => handleNotificationPreferenceChange('email')}
              />
              <Label htmlFor="emailNotifications">إشعارات البريد الإلكتروني</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox
                id="pushNotifications"
                checked={userData.notificationPreferences.push}
                onCheckedChange={() => handleNotificationPreferenceChange('push')}
              />
              <Label htmlFor="pushNotifications">الإشعارات الفورية</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox
                id="smsNotifications"
                checked={userData.notificationPreferences.sms}
                onCheckedChange={() => handleNotificationPreferenceChange('sms')}
              />
              <Label htmlFor="smsNotifications">إشعارات الرسائل النصية</Label>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button onClick={handlePrevious} variant="outline">
              السابق
            </Button>
          )}
          <Button onClick={handleNext}>
            {step === totalSteps ? 'إنهاء' : 'التالي'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Onboarding;
