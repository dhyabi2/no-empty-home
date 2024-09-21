import React from 'react';

const Shimmer = ({ width = '100%', height = '20px' }) => {
  return (
    <div 
      className="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"
      style={{ width, height }}
    />
  );
};

export default Shimmer;