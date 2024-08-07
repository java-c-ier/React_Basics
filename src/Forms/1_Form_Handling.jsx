// Using useRef()

import React, { useRef } from 'react'

function Form1() {

    const name = useRef(null);
    const age = useRef(null);
    const handleSubmit = (details) => {
        details.preventDefault();
        console.log(name.current.value, age.current.value);
    }

  return (
    <form action='' onSubmit={handleSubmit} className=' w-max m-10 flex flex-col items-center gap-5'>
        <input ref={name} type="text" placeholder='Name' className='border-2 border-black rounded-md placeholder:text-center'/>
        <input ref={age} type="text" placeholder='Age' className='border-2 border-black rounded-md placeholder:text-center'/>
        <input type="submit" className='w-fit px-2.5 py-1 text-sm font-semibold bg-teal-500 rounded-full'/>
    </form>
  )
}

export default Form1