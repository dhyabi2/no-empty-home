import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = ({ duration = 5000 }) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isActive ? <ReactConfetti /> : null;
};

export default Confetti;