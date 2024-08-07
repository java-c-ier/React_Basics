import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Images() {

  const [value, setValue] = useState(true);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
        <div className='relative w-80 h-52 bg-zinc-100 rounded-md overflow-hidden flex'>

            <img className={`w-full h-full object-cover shrink-0 transition-transform duration-500 ${value ? '-translate-x-[0%]' : '-translate-x-[100%]'}`} src="https://images.unsplash.com/photo-1721763604802-21cc60882810?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <img className={`w-full h-full object-cover shrink-0 transition-transform duration-500 ${value ? '-translate-x-[0%]' : '-translate-x-[100%]'}`} src="https://images.unsplash.com/photo-1516645948235-2a4aed8d749a?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <span onClick={() => setValue(() => !value)} className='w-8 h-8 absolute rounded-full bg-[#dadada6b] bottom-[5%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center -rotate-45 transition-transform duration-200 hover:rotate-0'>
              <FaArrowRightLong size={'.7em'}></FaArrowRightLong>
            </span>
    
        </div>
    </div>
  )
}

export default Images