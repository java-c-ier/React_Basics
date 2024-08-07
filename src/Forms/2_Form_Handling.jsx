// Using Controlled Components

import React, { useState } from 'react'

function Form2() {

  const [value, setValue] = useState( {name:''} )

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(value);
  }

  return (
    <div>
      <form action='' onSubmit={handleSubmit} className=' w-max m-10 flex flex-col items-center gap-5'>
        <input onChange={(event) => setValue({name : event.target.value})} type="text" placeholder='Name' className='border-2 border-black rounded-md placeholder:text-center'/>
        <input type="submit" className='w-fit px-2.5 py-1 text-sm font-semibold bg-teal-500 rounded-full'/>
      </form>
    </div>
  )
}

export default Form2