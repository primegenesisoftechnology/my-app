'use client'
import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateUTCTime();
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateUTCTime() {
    const now = new Date();
    const utcTimeString = now.toUTCString();
    setTime(utcTimeString);
  }

  useEffect(() => {
    // Initial update
    updateUTCTime();
  }, []); // Empty dependency array ensures this effect runs only once during mount

  return (
    <div className="w-[260px] h-[90px] md:w-[390px] md:h-[210px] bg-yellow-400 rounded-xl shadow-sm">
      <h1 className="flex justify-center pt-2 font-bold text-[15px] md:text-[25px] text-black">AI Real-Time Signal Machine</h1>
      <div className="w-full h-full flex justify-center items-center">
        <h2 className=" text-black font-semibold text-[12px] mb-10 md:text-[24px]">{time}</h2>
      </div>
    </div>
  );
}
