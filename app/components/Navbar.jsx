import React from 'react'
import LOGO from '../statics/images/logopgot.png';
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="md:w-full  w-screen h-16.5 bg-black flex items-center">
        <div className="text-white text-[30px] flex gap-1 items-center">
            {/* <h1 className="font-bold">LOGO</h1> */}
            <div className="w-20 h-20 bg-black"><Image src={LOGO} alt="logo-pgot" width={250} height={250} /></div>
            <div className="">
            <span className="text-[27px] -mt-2">PGOT</span>
            <p className="text-[18px] -mt-2 text-yellow-400">Prime Genesis of Technology</p>
            </div>
            
        </div>
    </div>
  )
}
