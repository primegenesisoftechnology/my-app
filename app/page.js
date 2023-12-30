'use client'
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Div1 from "./components/Div1";
import Timer from "./components/Timer";
import Div2 from "./components/Div2";
import Div3 from "./components/Div3";
import Div4 from "./components/Div4";
import Div5 from "./components/Div5";


export default function Home() {
  const [actual, setActual] = useState('Wait ...');
  useEffect(() => {
    const livebtc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");

    livebtc.addEventListener('open', (event) => {
      console.log('WebSocket opened:', event);
    });

    livebtc.addEventListener('message', (event) => {
      const klineData = JSON.parse(event.data);
      setActual(parseFloat(klineData.k.c).toFixed(2));
    });

    return () => {
      livebtc.close();
    };
  }, []);
  
  return (
    <main className="w-full h-screen bg-slate-100 md:overflow-hidden overflow-x-hidden">
      <Navbar />
      <div className="flex md:w-full md:h-full w-screen md:gap-1">
        <Sidebar />
        <div className="p-2 flex flex-col relative md:left-16 md:top-10 left-2">
          
          <div className="flex md:gap-8 gap-2 md:flex-row flex-col">
            <Timer /> 
            <Div1 data={actual}/>
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
        </div>
      </div>
    </main>
  );
}
