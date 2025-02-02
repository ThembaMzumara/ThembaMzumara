import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../TimeLeft';

const AhsokaTano: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-700 text-white text-center p-8">
      <p className="text-xl italic mb-4">
        “I am no Jedi.” - Ahsoka Tano
      </p>
      <div className="text-2xl font-bold">
        {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default AhsokaTano;
