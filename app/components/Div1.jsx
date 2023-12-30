'use client'
import React from 'react';
export default function Div1(props) {
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prevVisibility) => !prevVisibility);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="w-[260px] md:w-[600px]  md:h-[210px] h-[90px] bg-zinc-950 rounded-xl">
      <div className="flex items-center w-full">
        <h1 className="pt-1 pl-3 md:pt-2 md:pl-5 font-bold md:text-[20px] text-[12px] text-white">BTC/USDT</h1>
        <div className="flex gap-1 items-center pt-2 pr-4 text-white ml-auto">
          <div className={`w-3 h-3 bg-red-500 rounded-full ${isVisible ? 'visible' : 'invisible'}`}></div>
          <span>Live</span>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <h2 className="md:text-[50px] text-[25px] mb-10  text-white">{props.data}</h2>
      </div>
    </div>
  )
}
