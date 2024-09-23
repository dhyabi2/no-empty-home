import React from 'react';
import { Button } from "@/components/ui/button";

const CustomKeyboard = ({ onKeyPress, onDelete, onSubmit }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="bg-gray-100 p-4 rounded-lg" dir="rtl">
      <div className="grid grid-cols-3 gap-2">
        {keys.map((key) => (
          <Button key={key} onClick={() => onKeyPress(key)} className="h-12 text-xl">
            {key}
          </Button>
        ))}
        <Button onClick={onDelete} className="h-12 col-span-2">حذف</Button>
        <Button onClick={onSubmit} className="h-12">إدخال</Button>
      </div>
    </div>
  );
};

export default CustomKeyboard;
