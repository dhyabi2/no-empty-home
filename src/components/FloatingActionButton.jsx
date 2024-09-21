import React from 'react';
import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

const FloatingActionButton = ({ onClick }) => {
  return (
    <Button
      className="fixed bottom-20 right-4 rounded-full p-4 shadow-lg"
      onClick={onClick}
    >
      <QrCode className="h-6 w-6" />
    </Button>
  );
};

export default FloatingActionButton;