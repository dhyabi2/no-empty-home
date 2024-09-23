import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Plus, QrCode, Camera, Gift, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const actions = [
    { icon: <QrCode className="h-4 w-4" />, label: "مسح رمز QR", onClick: () => navigate('/scan-qr') },
    { icon: <Camera className="h-4 w-4" />, label: "التقاط صورة", onClick: () => navigate('/capture-photo') },
    { icon: <Gift className="h-4 w-4" />, label: "استبدال", onClick: () => navigate('/redeem') },
    { icon: <MapPin className="h-4 w-4" />, label: "تسجيل الدخول", onClick: () => navigate('/check-in') },
  ];

  return (
    <div className="fixed bottom-20 left-4 z-50" dir="rtl">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-2 space-y-2"
          >
            {actions.map((action, index) => (
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
                    action.onClick();
                    setIsOpen(false);
                  }}
                >
                  {action.icon}
                  <span>{action.label}</span>
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
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </motion.div>
      </Button>
    </div>
  );
};

export default FloatingActionButton;
