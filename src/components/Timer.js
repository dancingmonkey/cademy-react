import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleChange = ({ target }) => setName(target.value);

  return (
    <div className="mx-auto mt-32 flex max-w-lg flex-col ">
      <h1>Time: {time}</h1>
      <input
        value={name}
        onChange={handleChange}
        className="m-1 rounded-sm border border-secondary bg-slate-800 p-1 outline-none"
        type="text"
        placeholder="Type Something"
      />
    </div>
  );
}
