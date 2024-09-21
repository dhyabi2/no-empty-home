import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { QrCode, Plus, Camera, Gift, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const actions = [
    { icon: <QrCode className="h-4 w-4" />, label: "Scan QR", onClick: () => console.log("Scanning QR code...") },
    { icon: <Camera className="h-4 w-4" />, label: "Take Photo", onClick: () => console.log("Taking photo...") },
    { icon: <Gift className="h-4 w-4" />, label: "Redeem", onClick: () => console.log("Redeeming reward...") },
    { icon: <MapPin className="h-4 w-4" />, label: "Check-in", onClick: () => console.log("Checking in...") },
  ];

  return (
    <div className="fixed bottom-20 right-4">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  className="w-full flex justify-start items-center space-x-2"
                  variant="secondary"
                  onClick={action.onClick}
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
        <Plus className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
