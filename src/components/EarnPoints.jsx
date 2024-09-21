import React from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '../contexts/AuthContext';

const EarnPoints = () => {
  const { earnPoints } = useAuth();

  const handleEarnPoints = () => {
    const pointsEarned = Math.floor(Math.random() * 50) + 1; // Random points between 1 and 50
    earnPoints(pointsEarned);
  };

  return (
    <div className="mt-4">
      <Button onClick={handleEarnPoints}>Earn Points</Button>
    </div>
  );
};

export default EarnPoints;