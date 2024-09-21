import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LogIn className="h-24 w-24 text-white" />
      </motion.div>
      <motion.h1
        className="text-4xl font-bold text-white mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loyalty App
      </motion.h1>
    </div>
  );
};

export default SplashScreen;