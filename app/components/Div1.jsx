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
          <div className={`md:w-3 w-2.5 md:h-3 h-2.5 bg-red-500  rounded-full ${isVisible ? 'visible' : 'invisible'}`}></div>
          <span className='md:text-[25px] text-[13px]'>Live</span>
        </div>
      </div>
      <div className="h-full flex justify-center items-center">
        <div>
         <h2 className="md:text-[50px] text-[20px] mb-10 text-white">{props.data}</h2>
         <div className="text-yellow-500 font-medium md:text-[25px] text-[12px] relative pt-2 md:left-52 left-20 bottom-10 w-68 ">
           <h2>Volume : {props.Volume}</h2>
        </div>
        </div>
        </div>
    </div>
  )
}
