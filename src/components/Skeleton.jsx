import React from 'react';

const Skeleton = ({ className }) => {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} dir="rtl" />;
};

export default Skeleton;
