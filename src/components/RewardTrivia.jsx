import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const RewardTrivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const triviaQuestions = [
    {
      question: "What's the maximum number of points you can earn in a single purchase?",
      options: ["100", "500", "1000", "No limit"],
      correctAnswer: "No limit"
    },
    {
      question: "How often do reward points expire?",
      options: ["Never", "Every month", "Every year", "Every 2 years"],
      correctAnswer: "Every year"
    },
    {
      question: "What's the minimum points required for a free coffee?",
      options: ["50", "100", "200", "500"],
      correctAnswer: "100"
    }
  ];

  const handleAnswer = () => {
    if (selectedAnswer === triviaQuestions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }
    if (currentQuestion < triviaQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reward Trivia</CardTitle>
      </CardHeader>
      <CardContent>
        {currentQuestion < triviaQuestions.length ? (
          <>
            <p className="mb-4">{triviaQuestions[currentQuestion].question}</p>
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {triviaQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleAnswer} className="mt-4" disabled={!selectedAnswer}>
              {currentQuestion === triviaQuestions.length - 1 ? "Finish" : "Next"}
            </Button>
          </>
        ) : (
          <div>
            <p>Game Over! Your score: {score} points</p>
            <Button onClick={() => {setCurrentQuestion(0); setScore(0);}} className="mt-4">
              Play Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RewardTrivia;