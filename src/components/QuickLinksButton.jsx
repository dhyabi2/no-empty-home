import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Link, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QuickLinksButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const quickLinks = [
    { label: "الرئيسية", path: "/" },
    { label: "استبدال النقاط", path: "/redeem-points" },
    { label: "العروض القريبة", path: "/nearby-offers" },
    { label: "المتاجر المفضلة", path: "/favorite-shops" },
  ];

  return (
    <div className="fixed bottom-32 left-4 z-50" dir="rtl">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-2 space-y-2"
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  className="w-full flex justify-start items-center space-x-2"
                  variant="secondary"
                  onClick={() => {
                    navigate(link.path);
                    setIsOpen(false);
                  }}
                >
                  <span>{link.label}</span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        className="rounded-full p-4 shadow-lg"
        onClick={toggleMenu}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Link className="h-6 w-6" />}
        </motion.div>
      </Button>
    </div>
  );
};

export default QuickLinksButton;