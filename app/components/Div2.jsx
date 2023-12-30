'use client'
import React, { useEffect} from 'react';
import { io } from "socket.io-client";
export default function Div2(props) {
  const [predictValue_1m, setPredictValue1] = React.useState("0");
  useEffect(() => {
    const socket = io("https://pred1.azurewebsites.net");
    socket.on('connect',function(){
      console.log(socket)
    })
    socket.on("data_1m", function (data) {
      setPredictValue1(parseFloat(data.message.predict[0]).toFixed(2));
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className=" w-[260px] md:w-3/6 h-[90px] bg-lime-500 rounded-xl">
      <div className="flex items-center w-full">
        <h1 className="pt-2 pl-5 font-bold md:text-[20px] text-[10px] text-white">Prediction-1m</h1>
      </div>
      <div className="w-full h-full flex justify-center items-center gap-3">
        <h2 className="md:text-[30px] text-[20px] -mt-10 text-white">{predictValue_1m != 0 ? predictValue_1m : "Wait ..."}</h2>
        {predictValue_1m > props.actual ?<div className="w-8 h-8 rounded-full bg-green-600 -mt-10 flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffff'><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></div>: <div className="w-8 h-8 rounded-full bg-red-600 -mt-10 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffff"><path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z"/></svg></div>}
    </div>
    </div>
  )
}