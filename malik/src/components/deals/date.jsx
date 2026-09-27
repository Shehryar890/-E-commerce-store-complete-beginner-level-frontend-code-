import React, { useState, useEffect } from 'react';

const DealOfTheWeek = () => {
  // Check if there's an end time in localStorage; otherwise, set it to 7 days from now
  const getEndTime = () => {
    const storedEndTime = localStorage.getItem('dealEndTime');
    if (storedEndTime) {
      return new Date(storedEndTime).getTime();
    } else {
      const newEndTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem('dealEndTime', new Date(newEndTime).toISOString());
      return newEndTime;
    }
  };

  const [timeLeft, setTimeLeft] = useState(getEndTime() - new Date().getTime());

  // Function to calculate the time remaining
  const calculateTimeLeft = (ms) => {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((ms % (60 * 1000)) / 1000);
    return { days, hours, minutes, seconds };
  };

  // Update the time left every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getEndTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Deconstruct the timeLeft into days, hours, minutes, and seconds
  const { days, hours, minutes, seconds } = calculateTimeLeft(timeLeft);

  // If the timer hits zero, stop the countdown
  if (timeLeft <= 0) {
    return <h1 className="text-4xl font-bold  ">Deal is Over!</h1>;
  }

  return (
    <div className="mt-32 text-red-800 font-bold flex items-center gap-9 ml-12">
      <h1 className="text-4xl font-bold text-6xl">Deal of the Week</h1>
      <div className="bg-black text-white p-10 rounded-lg">
        <span className="text-4xl font-bold">{days}d</span>
        <span className="text-4xl font-bold mx-2">:</span>
        <span className="text-4xl font-bold">{hours}h</span>
        <span className="text-4xl font-bold mx-2">:</span>
        <span className="text-4xl font-bold">{minutes}m</span>
        <span className="text-4xl font-bold mx-2">:</span>
        <span className="text-4xl font-bold">{seconds}s</span>
      </div>
    </div>
  );
};

export default DealOfTheWeek;
