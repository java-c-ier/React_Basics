// useState() in removal of array elements

import React, { useState } from 'react'

function Demo3() {

    const [value, setValue] = useState([1, 2, 3, 4, 5, 6])

  return (
    <div className='p-10'>

        {/* {value.map(item => <h1 className='px-8'>{item}</h1>)}
        <button onClick={() => setValue(() => value.filter((item,index) => index!=value.length-1) )} className='px-3 py-1 my-2 text-sm bg-blue-500 rounded-full text-zinc-200'>Change</button> */}

        {/* {value.map(item => <h1 className='px-8'>{item}</h1>)}
        <button onClick={() => setValue(() => value.filter((item,index) => item!=3) )} className='px-3 py-1 my-2 text-sm bg-blue-500 rounded-full text-zinc-200'>Change</button> */}

        {value.map(item => <h1 className='px-8'>{item}</h1>)}
        <button onClick={() => setValue(() => value.filter((item,index) => item%3!=0) )} className='px-3 py-1 my-2 text-sm bg-blue-500 rounded-full text-zinc-200'>Change</button>

    </div>
  )
}

export default Demo3