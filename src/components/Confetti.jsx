import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = ({ duration = 5000 }) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isActive) return null;

  return (
    <div dir="rtl">
      <ReactConfetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
      />
    </div>
  );
};

export default Confetti;
