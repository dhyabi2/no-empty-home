import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

const OnboardingStep = ({ title, content, onNext }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
  >
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{content}</p>
        <Button onClick={onNext}>Next</Button>
      </CardContent>
    </Card>
  </motion.div>
);

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Loyalty App",
      content: "Discover amazing rewards and offers from your favorite shops."
    },
    {
      title: "Earn Points",
      content: "Make purchases at participating stores to earn loyalty points."
    },
    {
      title: "Redeem Rewards",
      content: "Use your points to get discounts and special offers."
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <OnboardingStep
        title={steps[step].title}
        content={steps[step].content}
        onNext={handleNext}
      />
    </div>
  );
};

export default Onboarding;