// useState() in addition of array elements

import React, { useState } from 'react'

function Demo4() {

    const [value, setValue] = useState([1, 2, 3, 4, 5])

  return (
    <div className='p-10'>
        {value.map(item => <h1 className='px-8'>{item}</h1>)}
        <button onClick={() => setValue([...value, `${value.length+1}`])} className='px-3 py-1 my-2 text-sm bg-blue-500 rounded-full text-zinc-200'>Change</button>
    </div>
  )
}

export default Demo4