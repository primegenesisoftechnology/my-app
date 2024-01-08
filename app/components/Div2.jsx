'use client'
import React, { useEffect} from 'react';
export default function Div2(props) {
  const [predictValue_1m, setPredictValue1] = React.useState("");
  const [Timeutc,setTimeutc]=React.useState();
  useEffect(() => {
    const sse=new EventSource('https://pred1.azurewebsites.net/stream1m');
    function handledata(e){
      var data1 = e.data;
      data1=data1.split('-');
      console.log(data1[0]);
      setTimeutc(data1[1]);
      setPredictValue1(parseFloat(data1[0]).toFixed(2));
    }
    sse.onmessage=(e)=>{handledata(e)
      console.log(e);
    }
  }, []);
  console.log("1m : ",predictValue_1m)
  return (
    <div className=" w-[260px] md:w-3/6 h-[90px] md:h-[100px] bg-lime-500 rounded-xl">
      <div className="w-full flex items-center">
        <h1 className="pt-2 pl-5 font-bold md:text-[20px] text-[10px] text-white">Prediction-1m</h1>
        <h4 className='relative top-1 left-[5rem] pl-1 md:pl-0 md:left-[11.8rem] md:text-[18px] text-[10px] font-semibold text-stone-50 w-40'>Next-In : <span className='w-10 md:text-[18px] text-[10px] font-semibold text-stone-50 bg-black bg-opacity-55 rounded p-[6px] pt-[1.5px] pb-[1.5px]'>{Timeutc}</span> </h4>
      </div>
      <div className="w-full h-full flex justify-center items-center gap-3">
        <h2 className="md:text-[30px] text-[20px] -mt-10 text-white">{predictValue_1m != "" ? predictValue_1m : "Wait ..."}</h2>
        {predictValue_1m > props.actual ? <div className="w-8 h-8 rounded-full bg-green-600 -mt-10 flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ffff'><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></div>: <div className="w-8 h-8 rounded-full bg-red-600 -mt-10 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffff"><path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z"/></svg></div>}
    </div>
    </div>
  )
}
