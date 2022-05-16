import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.addEventListener('mousedown', increment);
    return () => document.removeEventListener('mousedown', increment);
  });

  // your code here
  const increment = () => {
    return setClickCount(prev => prev + 1);
  };

  return <h1>Document Clicks: {clickCount}</h1>;
}
