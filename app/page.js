'use client'
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Div1 from "./components/Div1";
import Timer from "./components/Timer";
import Div2 from "./components/Div2";
import Div3 from "./components/Div3";
import Div4 from "./components/Div4";
import Image from "next/image";
import Div5 from "./components/Div5";
import Microsoft from './statics/images/RE1Mu3b.png';
import Openai from './statics/images/openai.svg';
export default function Home() {
  const [actual, setActual] = useState('Wait ...');
  const [vol,setvol]=useState('0');
  useEffect(() => {
    const livebtc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");

    livebtc.addEventListener('open', (event) => {
      console.log('WebSocket opened:', event);
    });

    livebtc.addEventListener('message', (event) => {
      const klineData = JSON.parse(event.data);
      setActual(parseFloat(klineData.k.c).toFixed(2));
      setvol(parseFloat(klineData.k.v).toFixed(2))
    });

    return () => {
      livebtc.close();
    };
  }, []);
  
  return (
    <main className="w-full h-screen bg-slate-100  overflow-x-hidden">
      <Navbar />
      <div className="flex md:w-full md:h-full w-screen md:gap-1">
        <Sidebar />
        <div className="p-2 flex flex-col relative md:left-16 md:top-10 left-2">
          
          <div className="flex md:gap-8 gap-2 md:flex-row flex-col">
            <Timer /> 
            <Div1 data={actual} Volume={vol}/>
          </div>
          <br />
          <div className=" flex md:flex-row gap-2 flex-col md:gap-8 flex-wrap md:flex-nowrap md:-mt-0 -mt-4">
            <Div2  actual={actual} />
            <Div3  actual={actual} />
          </div>
          <br />
          <div className="flex md:flex-row gap-2 flex-col md:gap-8 flex-wrap md:flex-nowrap md:-mt-0 -mt-4">
            <Div4  actual={actual} />
            <Div5  actual={actual} />
          </div>
          <div className="w-full p-2 text-center dark:bg-neutral-700 ">
              <span className="text-[12px]">Official Partners</span>
              <div className="w-full flex justify-center items-center md:flex-row flex-col  md:pt-0 ">
              <div className=" w-full flex gap-2 p-1 items-center justify-center">
              <Image src={Microsoft} alt="logo-pgot" width={120} height={120} />
              </div>
              <div className=" w-full flex gap-1 pl-4 p-1 items-center justify-center">
              <svg width="30" height="30" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg"><path d="M14 22H7V11H0V4h14v18zM28 22h-8l7.5-18h8L28 22z" fill="currentColor"></path><circle cx="20" cy="8" r="4" fill="currentColor"></circle></svg>
              <span className=" font-semibold text-[17px]">TradingView </span>
              </div>
              <div className=" w-full flex gap-2 pr-4 p-1 items-center justify-center ">
              <Image src={Openai} alt="logo-pgot" width={110} height={110} />
              </div>
              </div>
              <span className="text-[8px] md:text-[12px] pb-2 ">© 2024 All Copyrights Reserved &nbsp; PGOT</span>
         </div>
        
        </div> 
      </div>
    </main>
  );
}
