import React from 'react';

const Shimmer = ({ width = '100%', height = '20px', className = '' }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ width, height }}
      dir="rtl"
    ></div>
  );
};

export default Shimmer;
