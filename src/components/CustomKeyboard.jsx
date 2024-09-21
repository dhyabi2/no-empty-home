import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const CustomKeyboard = ({ onEnter, onClear }) => {
  const [input, setInput] = useState('');

  const handleKeyPress = (key) => {
    setInput(prev => prev + key);
  };

  const handleClear = () => {
    setInput('');
    onClear();
  };

  const handleEnter = () => {
    onEnter(input);
    setInput('');
  };

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-center text-lg font-bold border rounded"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {keys.map(key => (
          <Button key={key} onClick={() => handleKeyPress(key)} className="text-lg">
            {key}
          </Button>
        ))}
        <Button onClick={handleClear} className="col-span-2 bg-red-500 hover:bg-red-600">
          Clear
        </Button>
        <Button onClick={handleEnter} className="bg-green-500 hover:bg-green-600">
          Enter
        </Button>
      </div>
    </div>
  );
};

export default CustomKeyboard;