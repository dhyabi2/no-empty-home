import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const RewardTrivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "كم عدد النقاط التي تحصل عليها عند إنفاق 100 ريال في متاجرنا الشريكة؟",
      options: ["5 نقاط", "10 نقاط", "15 نقاط", "20 نقاط"],
      correctAnswer: 1
    },
    {
      question: "ما هو الحد الأدنى من النقاط المطلوبة لاستبدال قسيمة خصم 10%؟",
      options: ["100 نقطة", "250 نقطة", "500 نقطة", "1000 نقطة"],
      correctAnswer: 2
    },
    {
      question: "كم مرة يمكنك مضاعفة نقاطك في الشهر؟",
      options: ["مرة واحدة", "مرتين", "ثلاث مرات", "أربع مرات"],
      correctAnswer: 1
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetTrivia = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <HelpCircle className="ml-2" />
          مسابقة المكافآت
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <>
            <h3 className="font-semibold mb-4">{questions[currentQuestion].question}</h3>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  className="w-full text-right"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">السؤال {currentQuestion + 1} من {questions.length}</p>
          </>
        ) : (
          <div className="text-center">
            <h3 className="font-semibold mb-4">النتيجة النهائية</h3>
            <p className="text-xl mb-4">لقد أجبت على {score} من {questions.length} أسئلة بشكل صحيح!</p>
            <Button onClick={resetTrivia}>حاول مرة أخرى</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RewardTrivia;
